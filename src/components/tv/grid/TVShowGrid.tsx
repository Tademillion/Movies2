import { TVShow } from "../../../types/api.types";
import ErrorPage from "../../common/ErrorPage";
import LoadingSpinner from "../../common/LoadingSpinner";
import UseGenericMovies from "../../movies/Hooks/UseGenericMovies";
import TVShowCard from "../card/TVShowCard";
import { TvshowsEndpointProps } from "../TVShowsPage";

const TVShowGrid = ({ endpoint, currentPage }: TvshowsEndpointProps) => {
  // const { error, isLoading, tvShows } = UseTvShows(endpoint);
  // const {
  //   data: tvShows,
  //   error,
  //   isLoading,
  // } = UseTvShowsGeneric({ endpoint, currentPage });

  const {
    data: tvShows,
    Error: error,
    isLoading,
  } = UseGenericMovies<TVShow>(
    `/tv/${endpoint}`,
    {},
    { params: { page: currentPage } },
    [endpoint, currentPage]
  );

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    console.log(error);
    return <ErrorPage errorType={error} />;
  }
  if (!tvShows.length) {
    return <ErrorPage errorType="generic" message="No TV shows found" />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
      {tvShows.map((show) => (
        <TVShowCard Tv={show} key={show.id} />
      ))}
    </div>
  );
};
export default TVShowGrid;
