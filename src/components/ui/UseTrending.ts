import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";
import { FetchMovieRespone } from "../../types/api.types";
const useTrending = (timeWindow: "day" | "week") => {
  return useInfiniteQuery<FetchMovieRespone, Error>({
    queryKey: ["trend", timeWindow],
    queryFn: async ({ pageParam = 1 }) => {
    
  return    apiClient.get<FetchMovieRespone>( `/trending/movie/${timeWindow}`,
        { params: { page: pageParam } }).then(response=>{
          // console.log(response.data)
            keepPreviousData:true
            //setData((prev) => [...prev, reposense.data.results]); this is what hapened when getnextPageParam is called
            // this is the same as setData((prev) => [...prev, ...reposense.data.results]);
            //  setAllPages((prev)=>[...prev,...reposense.data.results])
            return response.data
        }).catch(error=>{
            return error
        }) 
    },
    placeholderData:keepPreviousData,// keepspreviousData:true
    getNextPageParam: (lastPage,allpages) => {
        //  when this reruns number the react query do like this 
        //setData((prev) => [...prev, ...newData]);
      return lastPage.page < lastPage.total_pages ? allpages.length + 1 : undefined;
    },
    initialPageParam: 1, // Required in v5 of @tanstack/react-query
  });
  
};
 

export default useTrending;