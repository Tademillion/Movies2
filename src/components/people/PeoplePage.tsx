import { useState } from "react";
import PeopleGrid from "./grid/PeopleGrid";

const PeoplePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Popular People</h1>
        <p className="text-white/70 text-lg max-w-2xl text-center">
          Discover and explore the most popular actors, directors, writers, and
          producers in the entertainment industry.
        </p>
      </div>

      <div>
        <PeopleGrid currentPage={currentPage} />
      </div>

      <div className="flex justify-center items-center space-x-4 mt-5">
        <button
          className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage((pages) => pages - 1);
            }
          }}
          disabled={currentPage == 1}
        >
          Previous
        </button>
        <span className="text-white/80">Page {currentPage} of 10</span>
        <button
          className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            if (currentPage < 10) {
              setCurrentPage((pages) => pages + 1);
            }
          }}
          disabled={currentPage == 10}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PeoplePage;
