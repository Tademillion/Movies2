import { motion } from "framer-motion";
import { FaPlay, FaStar } from "react-icons/fa";
import { FetchMovieRespone, Movie } from "../types/api.types";
import ErrorPage from "./common/ErrorPage";
import UseGenericMovies from "./movies/Hooks/UseGenericMovies";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import apiClient from "../services/apiClient";

const TopMovies = () => {
  // const {
  //   Error,
  //   isLoading,
  //   data: movies,
  // } = UseGenericMovies<Movie>("/movie/top_rated", {}, { params: {} });

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<FetchMovieRespone, Error>({
    queryKey: ["top250"],
    queryFn: ({ pageParam = 1 }) => {
      return apiClient
        .get("/movie/top_rated", {
          params: {
            page: pageParam,
          },
        })
        .then((reponse) => {
          keepPreviousData: true;
          return reponse.data;
        })
        .catch((error) => error);
    },
    getNextPageParam: (lastPage, allpages) => {
      //  when this reruns number the react query do like this
      //setData((prev) => [...prev, ...newData]);
      return lastPage.page < lastPage.total_pages
        ? allpages.length + 1
        : undefined;
    },
    initialPageParam: 1,
    //  what we know is in infinitequeryversion fo 5
    // two things are must unde queryfunvtion

    // 3. getNextPageParam
    // 4. initialPageParam
  });

  const movies = data?.pages.flatMap((page) => page.results);
  if (error) {
    return <ErrorPage errorType={"404"} />;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Top 250 Movies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
        {movies?.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-4 w-full">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {movie.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <FaStar className="text-yellow-400" />
                    <span className="text-white">
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mt-1">
                    {new Date(movie.release_date).getFullYear()}
                  </p>
                  <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors">
                    <FaPlay className="text-sm" />
                    <span>Watch Now</span>
                  </button>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-full text-sm">
                #{index + 1}
              </div>
            </div>
          </motion.div>
        ))}
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors"
          onClick={() => {
            fetchNextPage();
          }}
          disabled={!hasNextPage}
        >
          {" "}
          {isFetchingNextPage ? "Loading ...." : "loadMore"}
        </button>
      </div>
    </div>
  );
};

export default TopMovies;
