export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const getPageNumbers = () => {
    const pages = []
    const start = Math.max(1, page - 2)
    const end = Math.min(totalPages, page + 2)

    if (start > 1) pages.push(1)
    if (start > 2) pages.push('...')

    for (let i = start; i <= end; i++) pages.push(i)

    if (end < totalPages - 1) pages.push('...')
    if (end < totalPages) pages.push(totalPages)

    return pages
  }

  const btn = 'px-3 py-1.5 text-sm rounded-lg transition disabled:opacity-30 disabled:cursor-not-allowed'
  const active = 'bg-blue-600 text-white'
  const inactive = 'bg-gray-700 text-gray-300 hover:bg-gray-600'

  return (
    <nav className="flex items-center justify-center gap-1.5 mt-8 flex-wrap">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className={`${btn} ${inactive}`}
      >
        ← Anterior
      </button>

      {getPageNumbers().map((p, i) =>
        p === '...' ? (
          <span key={`dots-${i}`} className="px-2 text-gray-500 text-sm">…</span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`${btn} ${p === page ? active : inactive}`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className={`${btn} ${inactive}`}
      >
        Siguiente →
      </button>
    </nav>
  )
}
