import { useEffect, useState } from "react";
 import { FetchTvShowsRespone, TVShow } from "../../../types/api.types";
import { TvshowsEndpointProps } from "../TVShowsPage";
import apiClient from "../../../services/apiClient";

const UseTvShows=({endpoint}:TvshowsEndpointProps)=>{
    const [tvShows, setTVShows] = useState<TVShow[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    //  console.log("usetv shows",endpoint)
    useEffect(() => {
      
      setIsLoading(true);
      apiClient
        .get<FetchTvShowsRespone>(endpoint?"tv/"+endpoint:"tv/popular")
        .then((response) => {
         
          setTVShows(response.data.results); 
          setIsLoading(false);
         
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false)
        });
    }, [endpoint]);
     return {tvShows,isLoading,error}
}
 export default UseTvShows;
//   custom hooks are services