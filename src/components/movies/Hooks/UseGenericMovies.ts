import { useEffect, useState } from "react";
import apiClient from "../../../services/apiClient";
import { GenreProps } from "../MoviesPage";
import { AxiosRequestConfig } from "axios";
import { FetchRespone } from "../../UseData";

const UseGenericMovies=<T extends Record<string, any>>( endpoint:string,  {sortedBy}: GenreProps,requestConfig?:AxiosRequestConfig,Deps?:any[])=>{
const [data, setMovies] = useState<T[]>([]);
// extends Record<string, any> the key must be string and value is any
    const [isLoading, setIsLoading] = useState(false);
    const [Error, setError] = useState<any >(null);
    const    getSortedResults=(data:   T[] , sortedBy?: string | null)=> {
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
          .get<FetchRespone<T>>(endpoint,{...requestConfig})
          .then((response) => {
            setMovies(getSortedResults(response.data.results,sortedBy));
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error.status);
            // console.log(error.status)
            setIsLoading(false);
          });
      }, Deps?[...Deps]: []);
       return { data,isLoading,Error} 
}
 export default UseGenericMovies