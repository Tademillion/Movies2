import { Link } from "react-router-dom";
import { MoviesCategory, TvShowsConst } from "../../../constants/constants";
import ErrorPage from "../../common/ErrorPage";
import LoadingSpinner from "../../common/LoadingSpinner";
import Genras from "./genras";
export interface TvshowsType {
  name: string;
  value: string;
}

interface Props {
  handelCheck: (genre_id: number) => void;
  HandleTvCategory: (data: TvshowsType) => void;
  HandleMovieSortBy: (data: string) => void;
  activeTab: string;
  handleactiveTabs: (tabs: string) => void;
}

const SideBar = ({
  handelCheck,
  HandleTvCategory,
  HandleMovieSortBy,
  activeTab,
  handleactiveTabs,
}: Props) => {
  const { error, genre, isLoading } = Genras();
  {
    isLoading && <LoadingSpinner />;
  }
  {
    error && <ErrorPage />;
  }
  return (
    <div>
      <aside className="top-15 sticky w-64 h-screen p-6 bg-gradient-to-b from-indigo-900/90 via-purple-900/90 to-pink-900/90 backdrop-blur-sm border-r border-white/10">
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Filters</h3>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white/80">
                Categories
              </h4>
              <div className="space-y-3">
                {["Movies", "People", "Tvshows"].map((category) => (
                  <label
                    key={category}
                    className="flex items-center space-x-3 group"
                  >
                    <input
                      type="radio"
                      name="category"
                      checked={activeTab === category} // Compare with the state
                      value={category}
                      onChange={() => {
                        handleactiveTabs(category);
                      }}
                      className="form-radio h-5 w-5 border-white/30 bg-white/10 text-indigo-400 focus:ring-indigo-400 focus:ring-offset-0"
                    />
                    <span className="text-sm text-white/90 group-hover:text-white transition-colors">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            {activeTab === "Movies" && (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-white/80">
                  {" "}
                  Movies By Genres
                </h4>
                <div className="space-y-3">
                  {genre.slice(0, 5).map((genres) => (
                    <label
                      key={genres.id}
                      className="flex items-center space-x-3 group"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 rounded border-white/30 bg-white/10 text-indigo-400 focus:ring-indigo-400 focus:ring-offset-0"
                        onChange={() => {
                          handelCheck(genres.id);
                        }}
                      />
                      <span className="text-sm text-white/90 group-hover:text-white transition-colors">
                        {genres.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Tvshows" && (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-white/80">
                  Tv-Shows Filters
                </h4>
                {TvShowsConst.map((tv, index) => (
                  <div className="space-y-3" key={index}>
                    <label className="flex items-center space-x-3 group">
                      <input
                        type="checkbox"
                        // value={tv.value}
                        className="form-checkbox h-5 w-5 rounded border-white/30 bg-white/10 text-indigo-400 focus:ring-indigo-400 focus:ring-offset-0"
                        onChange={(event) => {
                          if (event.target.checked) HandleTvCategory(tv);
                        }}
                      />
                      <span className="text-sm text-white/90 group-hover:text-white transition-colors">
                        {tv.name}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Movies" && (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-white/80">
                  {" "}
                  Mivies Sort By
                </h4>
                <div className="space-y-3">
                  {MoviesCategory.map((category, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-3 group"
                    >
                      <input
                        type="radio"
                        name="sort"
                        className="form-radio h-5 w-5 border-white/30 bg-white/10 text-indigo-400 focus:ring-indigo-400 focus:ring-offset-0"
                        onChange={() => {
                          HandleMovieSortBy(category.value);
                        }}
                      />
                      <span className="text-sm text-white/90 group-hover:text-white transition-colors">
                        {category.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/top250"
                className="block text-sm text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
              >
                Top 250 Movies
              </Link>
              <Link
                to="/trending"
                className="block text-sm text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
              >
                Trending Now
              </Link>
              <Link
                to="/upcoming"
                className="block text-sm text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
              >
                Upcoming Releases
              </Link>
              <Link
                to="/popular-people"
                className="block text-sm text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
              >
                Popular People
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
