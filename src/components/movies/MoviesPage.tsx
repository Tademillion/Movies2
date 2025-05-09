import { useState } from "react";
import MovieCardGrid from "./card/MovieCardGrid";

export interface GenreProps {
  genre_id?: number | null;
  sortedBy?: string | null;
  page?: number | null;
}
const MoviesPage = ({ genre_id, sortedBy }: GenreProps) => {
  const [pages, setPages] = useState(1);
  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-8">Popular Movies</h1>
      <div>
        <MovieCardGrid sortedBy={sortedBy} genre_id={genre_id} page={pages} />
      </div>
      <div className="flex justify-center items-center space-x-4 mt-5">
        <button
          className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            if (pages > 1) {
              setPages((pages) => pages - 1);
            }
          }}
          disabled={pages == 1}
        >
          Previous
        </button>
        <span className="text-white/80">Page {pages} of 10</span>
        <button
          className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            if (pages < 10) {
              setPages((pages) => pages + 1);
            }
          }}
          disabled={pages == 10}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default MoviesPage;
