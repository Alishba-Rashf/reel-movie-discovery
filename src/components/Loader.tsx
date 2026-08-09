export function Loader() {
  return (
    <div className="state-panel" role="status" aria-live="polite">
      <div className="reel-spinner" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="state-panel__title">Threading the projector…</p>
      <p className="state-panel__body">Fetching the catalog.</p>
    </div>
  );
}
