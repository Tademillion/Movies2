import { useContext, useState } from "react";
import TvshowsContext from "./context/TvshowsContext";
import TvshowsPageContext from "./context/TvshowsPageContext";
import TVShowGrid from "./grid/TVShowGrid";
import TvshowsPagestand from "./Zustand/TvshowsPagestand";

const TVShowsPage = () => {
  const { state } = useContext(TvshowsContext);
  const { page, Increment, Decrement } = TvshowsPagestand();
  const totalPages = 10; // This would come from your API
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          {" "}
          {state} TV Shows
        </h1>
        <p className="text-white/70 text-lg max-w-2xl text-center">
          Discover and explore the most popular TV shows from around the world.
        </p>
      </div>

      <TVShowGrid />

      <div className="flex justify-center items-center space-x-4 mt-8">
        <button
          onClick={() => {
            Decrement();
          }}
          disabled={page === 1}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-white/80">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => {
            {
              Increment();
            }
          }}
          disabled={page === totalPages}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TVShowsPage;
