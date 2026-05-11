export default function EmptyState({ hasQuery }) {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-gray-400">
      {hasQuery ? (
        <>
          <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-lg">No se encontraron películas</p>
          <p className="text-sm mt-1">Intenta con otro término de búsqueda</p>
        </>
      ) : (
        <>
          <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
          </svg>
          <p className="text-lg">Busca tus películas favoritas</p>
          <p className="text-sm mt-1">Escribe en el campo de arriba para empezar</p>
        </>
      )}
    </div>
  )
}
