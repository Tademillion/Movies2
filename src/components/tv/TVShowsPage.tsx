import { useState } from "react";
import TVShowGrid from "./grid/TVShowGrid";
export interface TvshowsEndpointProps {
  endpoint: string;
  category?: string | null;
  currentPage?: number | null;
}

const TVShowsPage = ({ endpoint, category }: TvshowsEndpointProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // This would come from your API
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          {" "}
          {category} TV Shows
        </h1>
        <p className="text-white/70 text-lg max-w-2xl text-center">
          Discover and explore the most popular TV shows from around the world.
        </p>
      </div>

      <TVShowGrid endpoint={endpoint} currentPage={currentPage} />

      <div className="flex justify-center items-center space-x-4 mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-white/80">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TVShowsPage;
