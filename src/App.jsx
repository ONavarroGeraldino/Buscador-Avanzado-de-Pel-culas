import { useState } from 'react'
import { useDebounce } from './hooks/useDebounce'
import { useMovieSearch } from './hooks/useMovieSearch'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import Pagination from './components/Pagination'
import EmptyState from './components/EmptyState'
import ErrorState from './components/ErrorState'
import LoadingSkeleton from './components/LoadingSkeleton'

function App() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const debouncedQuery = useDebounce(query, 300)

  const { data, isLoading, isError, error, isFetching, refetch } =
    useMovieSearch(debouncedQuery, page)

  const movies = data?.results ?? []
  const totalPages = Math.min(data?.total_pages ?? 0, 500)

  const handleSearch = (value) => {
    setQuery(value)
    setPage(1)
  }

  const showLoading = isLoading && debouncedQuery.trim()
  const showError = isError
  const showEmpty = !isLoading && !isError && debouncedQuery.trim() && movies.length === 0
  const showInitial = !debouncedQuery.trim()
  const showResults = movies.length > 0

  return (
    <div className="min-h-screen bg-gray-950">
      <header className="sticky top-0 z-10 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-white text-center mb-4">
            🎬 Buscador de Películas
          </h1>
          <SearchBar value={query} onChange={handleSearch} />
          {isFetching && !isLoading && (
            <p className="text-center text-xs text-gray-500 mt-2">Actualizando...</p>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {showInitial && <EmptyState hasQuery={false} />}

        {showLoading && <LoadingSkeleton />}

        {showError && (
          <ErrorState
            message={error?.message ?? 'Ocurrió un error inesperado'}
            onRetry={refetch}
          />
        )}

        {showEmpty && <EmptyState hasQuery={true} />}

        {showResults && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>

            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        )}
      </main>
    </div>
  )
}

export default App
