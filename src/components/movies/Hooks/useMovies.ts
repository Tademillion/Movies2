import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../services/apiClient";
import { FetchMovieRespone, Movie } from "../../../types/api.types";
import { GenreProps } from "../MoviesPage";

const UseMovies=( {genre_id,sortedBy,page} : GenreProps)=>{
 
  const    getSortedResults=(data:   Movie[] , sortedBy?: string | null): Movie[]=> {
      if (!data || !data || !Array.isArray(data) || !sortedBy) {
        return data || []; // Or handle as needed
      }
    
      return [...data].sort((a, b) => {
        if (a[sortedBy] < b[sortedBy]) {
          return -1;
        }
        if (a[sortedBy] > b[sortedBy]) {
          return 1;
        }
        return 0;
      });
    }
    
return useQuery<Movie[],Error>({
  queryKey: ['movies', genre_id,page],
  queryFn: () => {
    return apiClient.get<FetchMovieRespone>("/discover/movie", {
      params: { with_genres: genre_id,page:page },
    })
      .then((response) => { 
        keepPreviousData:true
        return getSortedResults(response.data.results,sortedBy);
      })
      .catch((error) => error);
  },
});

}
 export  default UseMovies;