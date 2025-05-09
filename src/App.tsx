import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PopularPeople from "./components/PopularPeople";
import TopMovies from "./components/TopMovies";
import TrendingMovies from "./components/TrendingMovies";
import UpcomingMovies from "./components/UpcomingMovies";
import ErrorPage from "./components/common/ErrorPage";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import SideBar, { TvshowsType } from "./components/layout/sidebar/SideBar";
import ListsPage from "./components/lists/ListsPage";
import MoviesPage from "./components/movies/MoviesPage";
import PeoplePage from "./components/people/PeoplePage";
import TVShowsPage from "./components/tv/TVShowsPage";

function App() {
  const [genre, setGenre] = useState<number | null>(null);
  const [tvcategory, setTvCategory] = useState<string>("popular");
  const [tvshowsCategory, setTvshowsCategory] = useState<string>("Popular");
  const [MoviesSortedby, setMoviesSortedby] = useState<string | null>(null);
  const [active, setActiveTab] = useState("Movies");
  const [sidetab, setSideTab] = useState("Movies");
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar
          activeTab={(tabname: string) => {
            setActiveTab(tabname);
          }}
          incomingtab={sidetab}
        />
        {/* Main Content */}
        <div className="flex bg-black">
          {/* Sidebar */}
          <SideBar
            handelCheck={(genre_id: number) => {
              setGenre(genre_id);
            }}
            HandleTvCategory={(endpoint: TvshowsType) => {
              setTvCategory(endpoint.value);
              setTvshowsCategory(endpoint.name);
            }}
            HandleMovieSortBy={(data: string) => {
              setMoviesSortedby(data);
            }}
            activeTab={active}
            handleactiveTabs={(data: string) => {
              setSideTab(data);
            }}
          />
          <main className="flex-1 p-8 mt-20 mx-5 bg-red bg-white/5 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10">
            <div className="container mx-auto">
              <Routes>
                <Route
                  path="/"
                  element={
                    <MoviesPage sortedBy={MoviesSortedby} genre_id={genre} />
                  }
                />

                <Route
                  path="/movies"
                  element={
                    <MoviesPage genre_id={genre} sortedBy={MoviesSortedby} />
                  }
                />
                {/* <Route path="/people" element={<PeopleGrid />} /> */}
                <Route path="/people" element={<PeoplePage />} />
                <Route
                  path="/tv-shows"
                  element={
                    <TVShowsPage
                      category={tvshowsCategory}
                      endpoint={tvcategory}
                    />
                  }
                />
                <Route path="/lists" element={<ListsPage />} />
                <Route path="/top250" element={<TopMovies />} />
                <Route path="/trending" element={<TrendingMovies />} />
                <Route path="/upcoming" element={<UpcomingMovies />} />
                <Route path="/popular-people" element={<PopularPeople />} />
                <Route path="*" element={<ErrorPage errorType="404" />} />
              </Routes>
            </div>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
