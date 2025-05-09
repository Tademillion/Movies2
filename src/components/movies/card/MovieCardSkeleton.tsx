const MovieCardSkeleton = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-lg shadow-lg">
      {/* Poster Skeleton */}
      <div className="relative aspect-[2/3] w-full bg-gray-700">
        <div className="absolute right-2 top-2 h-6 w-12 rounded-full bg-gray-600" />
      </div>

      {/* Info Skeleton */}
      <div className="p-4">
        <div className="mb-2 h-5 w-3/4 rounded bg-gray-700" />
        <div className="mb-2 h-4 w-full rounded bg-gray-700" />
        <div className="h-4 w-1/2 rounded bg-gray-700" />
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
