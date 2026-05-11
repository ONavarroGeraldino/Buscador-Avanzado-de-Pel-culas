const SKELETONS = Array.from({ length: 6 })

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-8">
      {SKELETONS.map((_, i) => (
        <div key={i} className="bg-gray-800 rounded-xl overflow-hidden animate-pulse">
          <div className="aspect-[2/3] bg-gray-700" />
          <div className="p-3 space-y-2">
            <div className="h-3 bg-gray-700 rounded w-3/4" />
            <div className="h-3 bg-gray-700 rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  )
}
