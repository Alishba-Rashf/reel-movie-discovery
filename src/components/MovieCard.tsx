import type { Movie } from "../types";

export function MovieCard({ movie }: { movie: Movie }) {
  const poster = movie.image || movie.movie_banner;
  const score = Number(movie.rt_score);
  const hasScore = !Number.isNaN(score);

  return (
    <article className="movie-card">
      <div className="movie-card__poster">
        {poster ? (
          <img src={poster} alt={`${movie.title} poster`} loading="lazy" />
        ) : (
          <div className="movie-card__poster movie-card__poster--fallback" aria-hidden="true">
            🎬
          </div>
        )}
        {hasScore && (
          <span
            className={`movie-card__score ${score >= 90 ? "movie-card__score--fresh" : ""}`}
            title="Rotten Tomatoes score"
          >
            {score}%
          </span>
        )}
      </div>
      <div className="movie-card__body">
        <h2 className="movie-card__title">{movie.title}</h2>
        <p className="movie-card__meta">
          {movie.release_date} · dir. {movie.director}
        </p>
        <p className="movie-card__description">{movie.description}</p>
      </div>
    </article>
  );
}
