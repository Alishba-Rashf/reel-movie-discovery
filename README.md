# Reel — Movie Discovery App

A small React + TypeScript app that browses the Studio Ghibli film catalog. Built to demonstrate:

- Fetching data in `useEffect`, with loading and error states
- A reusable, generic `useFetch<T>` hook (`src/hooks/useFetch.ts`)
- A light/dark theme toggle via `useContext` (`src/context/ThemeContext.tsx`) — no prop drilling
- A typed data model (`src/types.ts`) for the API response

## Stack

- [Vite](https://vitejs.dev/) + React 18 + TypeScript
- No UI framework — hand-written CSS with theme tokens (`src/index.css`)
- Data source: [Studio Ghibli API](https://ghibliapi.vercel.app/films) (public, no API key required)

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

To type-check and build a production bundle:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Header.tsx        marquee header + film-strip motif
    ThemeToggle.tsx    reads/writes theme via useContext
    MovieGrid.tsx      grid layout
    MovieCard.tsx      single film card
    Loader.tsx         loading state
    ErrorState.tsx     error state + retry
  context/
    ThemeContext.tsx   ThemeProvider + useTheme()
  hooks/
    useFetch.ts        generic fetch hook (loading/error/refetch)
  App.tsx              wires fetch + search + rendering
  main.tsx             entry point, wraps App in ThemeProvider
  types.ts             Movie + Theme types
  index.css            design tokens for light ("Matinee") / dark ("Screening Room")
```

## Push to a new GitHub repo

These steps need your own GitHub account/credentials, so run them yourself from the project folder:

```bash
git init
git add .
git commit -m "Initial commit: Reel movie discovery app"
git branch -M main

# Create the repo (either the GitHub CLI, or create it manually on github.com first)
gh repo create reel-movie-discovery --public --source=. --remote=origin

# If you created the repo manually on github.com instead of using gh:
# git remote add origin https://github.com/<your-username>/reel-movie-discovery.git

git push -u origin main
```

## Deploy to Vercel

Easiest path is the Vercel CLI, authenticated as you:

```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow the prompts (framework preset: Vite)
vercel --prod # promote to your production *.vercel.app URL
```

Or import the GitHub repo directly at https://vercel.com/new — Vercel auto-detects the Vite
config, and every push to `main` will redeploy automatically. No environment variables are
required since the Ghibli API needs no key.

## Submit on MS Teams

Once deployed, post in your Teams channel:

- GitHub repo link: `https://github.com/<your-username>/reel-movie-discovery`
- Live URL: `https://<your-project>.vercel.app`

Due by next Monday.
