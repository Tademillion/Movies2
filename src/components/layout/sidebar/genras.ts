import { useEffect, useState } from "react"
import apiClient from "../../../services/apiClient"

 interface GenresProps{
    id:number,
    name:string
 }
  interface genreResult{
    genres:GenresProps[]
  }
 const Genras=()=>{
      const [genre,setGenre]= useState<GenresProps[]>([]);
      const[error,setError]=  useState();
      const [isLoading,setIsLoading]=useState(false);
useEffect(()=>{
     setIsLoading(true)
    apiClient.get<genreResult>("/genre/movie/list")
    .then((Response)=>{
        setGenre(Response.data.genres);
        setIsLoading(false)}
    )
    .catch((error)=>{
        console.log(error)
        setError(error);
        setIsLoading(false)
    })
},[]) 
 return {genre,error,isLoading}
}
 export default Genras