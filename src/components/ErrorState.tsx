interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="state-panel state-panel--error" role="alert">
      <p className="state-panel__title">The reel snapped.</p>
      <p className="state-panel__body">{message}</p>
      <button type="button" className="retry-button" onClick={onRetry}>
        Try again
      </button>
    </div>
  );
}
