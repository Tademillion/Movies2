import { useEffect, useState } from "react";
import { FetchMovieRespone, Movie } from "../../../types/api.types";
import apiClient from "../../../services/apiClient";
import { GenreProps } from "../MoviesPage";
import { useQuery } from "@tanstack/react-query";

const UseMovies=( {genre_id,sortedBy} : GenreProps)=>{
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [Error, setError] = useState<string | null>(null);
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
  queryKey: ['movies', genre_id],
  queryFn: () => {
    return apiClient.get<FetchMovieRespone>("/discover/movie", {
      params: { with_genres: genre_id },
    })
      .then((response) => { 
        return getSortedResults(response.data.results,sortedBy);
      })
      .catch((error) => error);
  },
});


     //return {movies,isLoading,Error}

}
 export  default UseMovies;