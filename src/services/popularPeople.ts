import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { FetchRespone } from "../components/UseData";
import { PeopleGridProps } from "../types/api.types";
import apiClient from "./apiClient";

const popularPeople=()=>{
    
 return useInfiniteQuery<FetchRespone<PeopleGridProps>, Error>({
    queryKey: ["peoples"],
    queryFn: () =>  
        apiClient
        .get("person/popular")
        .then( response =>  response.data) 
     ,placeholderData : keepPreviousData,
    getNextPageParam: (lastpage, allpages) => {
      return lastpage.page < lastpage.total_pages
        ? allpages.length + 1
        : undefined;
    },
getPreviousPageParam: (lastpage, allpages) => {
return lastpage.page>1?allpages.length-1:undefined
},
    initialPageParam: 1,
  });

}
export  default popularPeople