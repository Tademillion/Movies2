import { useReducer } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PopularPeople from "./components/PopularPeople";
import TopMovies from "./components/TopMovies";
import TrendingMovies from "./components/TrendingMovies";
import UpcomingMovies from "./components/UpcomingMovies";
import ErrorPage from "./components/common/ErrorPage";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import MenuLinkcontext from "./components/layout/sidebar/MenuLinkcontext";
import MenulinkReducer from "./components/layout/sidebar/MenulinkReducer";
import SideBar from "./components/layout/sidebar/SideBar";
import ListsPage from "./components/lists/ListsPage";
import MoviesPage from "./components/movies/MoviesPage";
import PeoplePage from "./components/people/PeoplePage";
import TVShowsPage from "./components/tv/TVShowsPage";
import TvshowsContext from "./components/tv/context/TvshowsContext";
import Tvshowsreducer from "./components/tv/reducer/Tvshowsreducer";

function App() {
  //   global state management
  const [state, dispatch] = useReducer(Tvshowsreducer, "popular");
  const [activetablink, linkDispatch] = useReducer(MenulinkReducer, "Movies");

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <MenuLinkcontext.Provider value={{ activetablink, linkDispatch }}>
          <Navbar />
          {/* Main Content */}

          <div className="flex bg-black">
            {/* Sidebar */}
            <TvshowsContext.Provider value={{ state, dispatch }}>
              <SideBar />
              <main className="flex-1 p-8 mt-20 mx-5 bg-red bg-white/5 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10">
                <div className="container mx-auto">
                  {
                    <Routes>
                      <Route path="/" element={<MoviesPage />} />

                      <Route path="/movies" element={<MoviesPage />} />
                      <Route path="/people" element={<PeoplePage />} />
                      <Route path="/tv-shows" element={<TVShowsPage />} />

                      <Route path="/lists" element={<ListsPage />} />
                      <Route path="/top250" element={<TopMovies />} />
                      <Route path="/trending" element={<TrendingMovies />} />
                      <Route path="/upcoming" element={<UpcomingMovies />} />
                      <Route
                        path="/popular-people"
                        element={<PopularPeople />}
                      />
                      <Route path="*" element={<ErrorPage errorType="404" />} />
                    </Routes>
                  }
                </div>
              </main>
            </TvshowsContext.Provider>
          </div>
        </MenuLinkcontext.Provider>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
