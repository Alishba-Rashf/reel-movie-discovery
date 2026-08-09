# Reel — Movie Discovery App

A small React + TypeScript app that browses the Studio Ghibli film catalog. Built to demonstrate:

- Fetching data in `useEffect`, with loading and error states
- A reusable, generic `useFetch<T>` hook (`src/hooks/useFetch.ts`)
- A light/dark theme toggle via `useContext` (`src/context/ThemeContext.tsx`) — no prop drilling
- A typed data model (`src/types.ts`) for the API response

