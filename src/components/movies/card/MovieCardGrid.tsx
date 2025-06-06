import ErrorPage from "../../common/ErrorPage";
import LoadingSpinner from "../../common/LoadingSpinner";
import TvshowsPagestand from "../../tv/Zustand/TvshowsPagestand";
import UseMovies from "../Hooks/useMovies";
import { GenreProps } from "../MoviesPage";
import MoviesStand from "../Zustand/MoviesStand";
import MovieCard from "./MovieCard";

const MovieCardGrid = () => {
  const { page } = TvshowsPagestand();
  const { sortedby: sortedBy, genre: genre_id } = MoviesStand();
  // console.log(genre);
  const {
    error: Error,
    data: movies,
    isLoading,
  } = UseMovies({ genre_id, sortedBy, page });
  // const {
  //   Error,
  //   isLoading,
  //   data: movies,
  // } = UseGenericMovies<Movie>(
  //   "/discover/movie",
  //   { genre_id, sortedBy },
  //   { params: { with_genres: genre_id, page: page } },
  //   [genre_id, sortedBy, page]
  // );

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (Error) {
    return <ErrorPage errorType={"404"} message={""} />;
  }
  if (movies?.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No movies found.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieCardGrid;
