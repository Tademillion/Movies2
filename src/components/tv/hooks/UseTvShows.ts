import { keepPreviousData, useQuery } from "@tanstack/react-query";
import tvShowsServices from "../../../services/tvshowsServices";
import { TVShow } from "../../../types/api.types";

 const UseTvShows=(endpoint:string,currentPage:number)=>{ 
 
const endpoints=endpoint ? `tv/${endpoint}` : "tv/popular"
 return useQuery<TVShow[], Error>({
  queryKey: ["tvshows", endpoint, currentPage],
  queryFn:()=> tvShowsServices(endpoints).getall({

    params:{
      page:currentPage
    } 
  }),
  placeholderData:keepPreviousData
  }) 
}
 export default UseTvShows;
