import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import { FetchMovieRespone } from "../../types/api.types";
const useTrending = (timeWindow: "day" | "week") => {
  return useInfiniteQuery<FetchMovieRespone, Error>({
    queryKey: ["trend", timeWindow],
    queryFn: async ({ pageParam = 1 }) => {
    
  return    apiClient.get<FetchMovieRespone>( `/trending/movie/${timeWindow}`,
        { params: { page: pageParam } }).then(response=>{
            return response.data
        }).catch(error=>{
            return error
        })
    },
    getNextPageParam: (lastPage,allpages) => {
      return lastPage.total_pages < lastPage.total_pages ? lastPage.total_pages + 1 : undefined;
    },
    initialPageParam: 1, // Required in v5 of @tanstack/react-query
  });
};

export default useTrending;