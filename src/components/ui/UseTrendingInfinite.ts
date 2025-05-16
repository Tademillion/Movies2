import { useEffect, useState } from "react"
import apiClient from "../../services/apiClient"
import { Movie } from "../../types/api.types"

 interface InfProps{
    pages:MT[]
 }
  interface MT{
    page:number,
    results:Movie[]
    total_pages:number,
    total_results:number
  }
const UseTrendingInfinite=(timeWindow:string,currentpage:number)=>{

const [pages,setPage]=useState<MT[]>([]);

 useEffect(()=>{
  apiClient.get<MT>(`/trending/movie/${timeWindow}`,{
    params:{
        page:currentpage
    }
  }).then(response=>{ 
    setPage(prev=>[...prev,{...response.data}])
  }).catch(error=>{
    return error
  } )
  
},[timeWindow,currentpage])
  
return {pages}
}
export default UseTrendingInfinite
