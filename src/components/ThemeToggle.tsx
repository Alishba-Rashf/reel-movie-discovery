import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={`Switch to ${isDark ? "matinee (light)" : "screening room (dark)"} mode`}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb">{isDark ? "🌙" : "☀️"}</span>
      </span>
      <span className="theme-toggle__label">{isDark ? "Screening Room" : "Matinee"}</span>
    </button>
  );
}
