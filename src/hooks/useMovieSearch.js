import { useQuery } from '@tanstack/react-query'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

async function fetchMovies({ queryKey }) {
  const [, query, page = 1] = queryKey
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}&language=es-ES`

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(res.status === 401
      ? 'API Key inválida. Verifica tu clave de TMDB.'
      : `Error al buscar: ${res.statusText}`)
  }
  return res.json()
}

export function useMovieSearch(query, page = 1) {
  return useQuery({
    queryKey: ['movies', query, page],
    queryFn: fetchMovies,
    enabled: !!query.trim(),
    staleTime: 5 * 60 * 1000,
    placeholderData: (prev) => prev,
  })
}
