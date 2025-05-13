import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../services/apiClient";
import { PeopleGridProps } from "../../../types/api.types";
import { FetchRespone } from "../../UseData";
import apiServices from "../../../services/apiServices";
const Services= new apiServices<PeopleGridProps>("person/popular");
 const getpeople=(currentPage?:number)=>
     apiClient.get<FetchRespone<PeopleGridProps>>("person/popular",{
        params:{
            page:currentPage
        }
        
     }).then((res)=>(res.data.results)).catch(error=>{
        console.log(error)
     }) 

 const UsePeoples =(currentPage? :number)=>useQuery({
    queryKey:["peoples",currentPage],
    queryFn:()=> Services.getall({
        params:{
            page:currentPage
    }
    })
})

//  const UsePeoples =(currentPage? :number)=> UseGenericMovies<PeopleGridProps>("person/popular",{},{params:{page:currentPage}},[currentPage]);

 export default UsePeoples;
