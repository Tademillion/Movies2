import { useEffect, useState } from "react";
import { FetchMovieRespone, Movie } from "../../../types/api.types";
import apiClient from "../../../services/apiClient";
import { GenreProps } from "../MoviesPage";

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
    useEffect(() => {
      setIsLoading(true);
      apiClient
        .get<FetchMovieRespone>("/discover/movie",{params:{with_genres:genre_id}})
        .then((response) => {
          setMovies(getSortedResults(response.data.results,sortedBy));
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }, [genre_id,sortedBy]);
     return {movies,isLoading,Error}
}
 export  default UseMovies;