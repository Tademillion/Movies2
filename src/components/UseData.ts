import { useEffect, useState } from "react";
 import apiClient from "../services/apiClient";

export interface FetchRespone<T>{
    results:T[];
    total_pages:number,
    total_results:number
   }
const UseData=<T>(endpoint:string)=>{
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);
    //  console.log("usetv shows",endpoint)
    useEffect(() => {
      
      setIsLoading(true);
      apiClient
        .get<FetchRespone<T>>(endpoint)
        .then((response) => { 
          setData(response.data.results); 
          setIsLoading(false); 
        })
        .catch((error) => {
           setError(error.status);
          setIsLoading(false)
        });
    }, [endpoint]);
     return { data,isLoading,error}


}
  export default UseData