import { keepPreviousData, useQuery } from "@tanstack/react-query";
import apiServices from "../../../services/apiServices";
import moviesServices from "../../../services/moviesServices";
import { Movie } from "../../../types/api.types";
import { GenreProps } from "../MoviesPage";
const serve= new apiServices<Movie>("/discover/movie")
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
  queryKey: ['movies', genre_id,page,sortedBy],
  queryFn: ()=>moviesServices.getall({
    
    params: { with_genres: genre_id,page:page },
  }).then(response=>{ 
    return getSortedResults(response,sortedBy)
    // sort the get results
  }) ,
  placeholderData: keepPreviousData,
  //  keepPreviousData :true is converted to placeholderData in reactquery5
});

}
 export  default UseMovies;