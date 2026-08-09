import { useEffect, useState, useCallback, useRef } from "react";

interface UseFetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

interface UseFetchResult<T> extends UseFetchState<T> {
  /** Re-run the fetch on demand (e.g. a "retry" button). */
  refetch: () => void;
}

/**
 * Generic data-fetching hook. Handles loading + error state and cleans up
 * after itself if the component unmounts (or the url changes) mid-request.
 */
export function useFetch<T>(url: string): UseFetchResult<T> {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  // Bumping this number is how `refetch` triggers the effect again.
  const [reloadToken, setReloadToken] = useState(0);
  const controllerRef = useRef<AbortController | null>(null);

  const refetch = useCallback(() => {
    setReloadToken((token) => token + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    controllerRef.current = controller;

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json() as Promise<T>;
      })
      .then((data) => {
        setState({ data, isLoading: false, error: null });
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") {
          // Expected when the component unmounts or the url changes; ignore.
          return;
        }
        const message =
          err instanceof Error ? err.message : "Something went wrong while fetching data.";
        setState({ data: null, isLoading: false, error: message });
      });

    return () => controller.abort();
  }, [url, reloadToken]);

  return { ...state, refetch };
}
