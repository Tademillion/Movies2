import { motion } from "framer-motion";
import { useState } from "react";
import { FaCalendarAlt, FaClock, FaPlay, FaStar } from "react-icons/fa";
import { Movie } from "../types/api.types";
import ErrorPage from "./common/ErrorPage";
import UseGenericMovies from "./movies/Hooks/UseGenericMovies";

const UpcomingMovies = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>("all");

  const {
    Error,
    isLoading,
    data: movies,
  } = UseGenericMovies<Movie>("/movie/upcoming", {}, {}, []);
  const getMonths = () => {
    const months = ["all"];
    const currentDate = new Date();
    for (let i = 0; i < 12; i++) {
      const date = new Date(currentDate);
      date.setMonth(currentDate.getMonth() + i);
      months.push(date.toLocaleString("default", { month: "long" }));
    }
    return months;
  };

  const filterMoviesByMonth = (movies: Movie[]) => {
    if (selectedMonth === "all") return movies;

    return movies.filter((movie) => {
      const releaseDate = new Date(movie.release_date);
      const movieMonth = releaseDate.toLocaleString("default", {
        month: "long",
      });
      console.log(movieMonth, selectedMonth);
      return movieMonth === selectedMonth;
    });
  };
  if (Error) {
    return <ErrorPage errorType={Error} />;
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  const filteredMovies = filterMoviesByMonth(movies);
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-3 mb-4"
          >
            <FaCalendarAlt className="text-4xl text-blue-500" />
            <h1 className="text-4xl font-bold text-white">Upcoming Releases</h1>
          </motion.div>

          {/* Month Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {getMonths().map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedMonth === month
                    ? "bg-blue-500 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {month.charAt(0).toUpperCase() + month.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
          {filteredMovies.map((movie, index) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-300 group-hover:scale-105">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-[400px] object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 w-full">
                    <h3 className="text-white text-xl font-bold mb-2 line-clamp-2">
                      {movie.title}
                    </h3>

                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <FaStar className="text-yellow-400" />
                        <span className="text-white">
                          {movie.vote_average.toFixed(1)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaClock className="text-blue-400" />
                        <span className="text-gray-300">
                          {new Date(movie.release_date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {movie.overview}
                    </p>

                    <div className="flex items-center justify-between">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-600 transition-colors">
                        <FaPlay className="text-sm" />
                        <span>Watch Trailer</span>
                      </button>
                      <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        #{index + 1}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Release Date Badge */}
                <div className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {new Date(movie.release_date).toLocaleDateString()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovies;
