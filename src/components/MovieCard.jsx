const IMG_BASE = 'https://image.tmdb.org/t/p/w342'

export default function MovieCard({ movie }) {
  const title = movie.title ?? 'Sin título'
  const year = movie.release_date?.slice(0, 4) ?? '—'
  const rating = movie.vote_average?.toFixed(1) ?? '—'
  const poster = movie.poster_path
    ? `${IMG_BASE}${movie.poster_path}`
    : null

  return (
    <article className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col">
      <div className="aspect-[2/3] bg-gray-700 relative">
        {poster ? (
          <img
            src={poster}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm p-4">
            Sin imagen
          </div>
        )}
        <span className="absolute top-2 right-2 bg-black/70 text-yellow-400 text-xs font-bold px-2 py-1 rounded-lg">
          ★ {rating}
        </span>
      </div>

      <div className="p-3 flex-1 flex flex-col justify-between gap-1">
        <h3 className="text-sm font-semibold text-white leading-tight line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-gray-400">{year}</p>
      </div>
    </article>
  )
}
