import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../services/apiClient";
import { FetchTvShowsRespone, TVShow } from "../../../types/api.types";
import { TvshowsEndpointProps } from "../TVShowsPage"; 
const UseTvShows=({endpoint,currentPage}:TvshowsEndpointProps)=>{ 

  const GetTvshows=()=>{
 return apiClient
      .get<FetchTvShowsRespone>(endpoint ? `tv/${endpoint}` : "tv/popular", {
        params: {
          page: currentPage,
        },
        
      })
      .then((response) => {
         keepPreviousData:true// prevent the page  vibrate up and down
        return response.data.results;
      })
      .catch((error) => {
        console.error("Error fetching TV shows:", error);
        throw error;
      })
  }
    //  master the query key to avoid cache collision
 return useQuery<TVShow[], Error>({
  queryKey: ["tvshows", endpoint, currentPage],
  queryFn: GetTvshows
  }) 
}
 export default UseTvShows;
