/** Shape returned by the Studio Ghibli API (https://ghibliapi.vercel.app/films). */
export interface Movie {
  id: string;
  title: string;
  original_title: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  image?: string;
  movie_banner?: string;
}

export type Theme = "light" | "dark";
