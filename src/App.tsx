import { useMemo, useState } from "react";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { ErrorState } from "./components/ErrorState";
import { MovieGrid } from "./components/MovieGrid";
import { useFetch } from "./hooks/useFetch";
import type { Movie } from "./types";

const FILMS_ENDPOINT = "https://ghibliapi.vercel.app/films";

export function App() {
  const { data: movies, isLoading, error, refetch } = useFetch<Movie[]>(FILMS_ENDPOINT);
  const [query, setQuery] = useState("");

  const filteredMovies = useMemo(() => {
    if (!movies) return [];
    const normalized = query.trim().toLowerCase();
    if (!normalized) return movies;
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(normalized) ||
        movie.director.toLowerCase().includes(normalized)
    );
  }, [movies, query]);

  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <div className="search-row">
          <input
            type="search"
            className="search-input"
            placeholder="Search by title or director…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            disabled={isLoading || Boolean(error)}
            aria-label="Search films"
          />
          {movies && (
            <span className="search-count">
              {filteredMovies.length} of {movies.length} films
            </span>
          )}
        </div>

        {isLoading && <Loader />}
        {!isLoading && error && <ErrorState message={error} onRetry={refetch} />}
        {!isLoading && !error && <MovieGrid movies={filteredMovies} />}
      </main>
      <footer className="app-footer">
        Data from the{" "}
        <a href="https://ghibliapi.vercel.app" target="_blank" rel="noreferrer">
          Studio Ghibli API
        </a>
        .
      </footer>
    </div>
  );
}
