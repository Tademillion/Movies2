import { Movie } from "../../../types/api.types";
import { TMDB_IMAGE_SIZES } from "../../../constants/api.constants";

interface MovieCardProps {
  movie: Movie;
  onClick?: () => void;
}

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group relative w-[270px] cursor-pointer overflow-hidden rounded-md shadow-md transition-transform duration-300 hover:scale-105"
    >
      {/* Movie Poster */}
      <div className="relative aspect-[2/3] ">
        <img
          src={`${TMDB_IMAGE_SIZES.poster.small}${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Rating Badge */}
        <div className="absolute right-2 top-2 rounded-full bg-black/70 px-2 py-1 text-sm font-semibold text-white">
          {movie.vote_average.toFixed(1)}
        </div>
      </div>

      {/* Movie Info Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="mb-1 text-lg font-bold text-white">{movie.title}</h3>
          <p className="text-sm text-gray-300 line-clamp-2">{movie.overview}</p>
          <div className="mt-2 flex items-center text-sm text-gray-300">
            <span>{new Date(movie.release_date).getFullYear()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
