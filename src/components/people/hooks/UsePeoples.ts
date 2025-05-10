import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../services/apiClient";
import { PeopleGridProps } from "../../../types/api.types";
import { FetchRespone } from "../../UseData";
 const getpeople=()=>
     apiClient.get<FetchRespone<PeopleGridProps>>("person/popular").then(response=>{
        // console.log(response.data)
        return response.data.results
     }).catch(error=>{
        console.log(error)
     })

    

 const UsePeoples =(currentPage? :number)=>useQuery({
    queryKey:["peoples"],
    queryFn: getpeople
})
//  const UsePeoples =(currentPage? :number)=> UseGenericMovies<PeopleGridProps>("person/popular",{},{params:{page:currentPage}},[currentPage]);

 export default UsePeoples;
