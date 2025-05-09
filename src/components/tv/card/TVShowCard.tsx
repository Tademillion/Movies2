import { TMDB_IMAGE_SIZES } from "../../../constants/api.constants";
import { TVShow } from "../../../types/api.types";
interface TvShows {
  Tv: TVShow;
}

const TVShowCard = ({ Tv }: TvShows) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="aspect-[2/3] relative">
        <img
          src={`${TMDB_IMAGE_SIZES.poster.medium}${Tv.poster_path}`}
          alt={Tv.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-semibold text-white mb-2">{Tv.name}</h3>
            <p className="text-sm text-white/70 line-clamp-2 mb-2">
              {Tv.overview}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-white/80">
                  {Tv.vote_average.toFixed(1)}
                </span>
              </div>
              <span className="text-sm text-white/60">
                {new Date(Tv.first_air_date).getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowCard;
