import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="app-header">
      <div className="filmstrip filmstrip--top" aria-hidden="true" />
      <div className="app-header__row">
        <div className="app-header__brand">
          <span className="app-header__reel" aria-hidden="true">
            🎞️
          </span>
          <div>
            <h1 className="app-header__title">Reel</h1>
            <p className="app-header__tagline">a small archive of animated worlds</p>
          </div>
        </div>
        <ThemeToggle />
      </div>
      <div className="filmstrip filmstrip--bottom" aria-hidden="true" />
    </header>
  );
}
