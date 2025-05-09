import { motion } from "framer-motion";
import { useState } from "react";
import { FaFilm, FaTv, FaUser } from "react-icons/fa";
import ErrorPage from "./common/ErrorPage";
import UsePeoples from "./people/hooks/UsePeoples";

interface Person {
  id: number;
  name: string;
  profile_path: string;
  known_for_department: string;
  known_for: Array<{
    title?: string;
    name?: string;
    media_type: string;
  }>;
  popularity: number;
}

const PopularPeople = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const { Error, isLoading, data: people } = UsePeoples();

  const departments = ["all", "Acting", "Directing", "Writing", "Production"];

  const filterPeopleByDepartment = (people: Person[]) => {
    if (selectedDepartment === "all") return people;
    return people.filter(
      (person) => person.known_for_department === selectedDepartment
    );
  };
  if (Error) {
    return <ErrorPage errorType="404" message={Error} />;
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  const filteredPeople = filterPeopleByDepartment(people);

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
            <FaUser className="text-4xl text-purple-500" />
            <h1 className="text-4xl font-bold text-white">Popular People</h1>
          </motion.div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setSelectedDepartment(department)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedDepartment === department
                    ? "bg-purple-500 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {department.charAt(0).toUpperCase() + department.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
          {filteredPeople.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-300 group-hover:scale-105">
                <img
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt={person.name}
                  className="w-full h-[400px] object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 w-full">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {person.name}
                    </h3>

                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-purple-400 text-sm font-semibold">
                        {person.known_for_department}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <h4 className="text-white/80 text-sm font-semibold">
                        Known For:
                      </h4>
                      {person.known_for.slice(0, 3).map((work, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          {work.media_type === "movie" ? (
                            <FaFilm className="text-yellow-400 text-sm" />
                          ) : (
                            <FaTv className="text-blue-400 text-sm" />
                          )}
                          <span className="text-gray-300 text-sm">
                            {work.title || work.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <button className="bg-purple-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-purple-600 transition-colors">
                        <FaUser className="text-sm" />
                        <span>View Profile</span>
                      </button>
                      <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        #{index + 1}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Popularity Badge */}
                <div className="absolute top-3 left-3 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {Math.round(person.popularity)}% Popular
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPeople;
