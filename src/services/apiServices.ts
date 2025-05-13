import apiClient from './apiClient';
import { FetchRespone } from '../components/UseData';
import { AxiosRequestConfig } from 'axios';

class apiServices<T>  {
    endpoint:string;
   constructor(endpoint:string){
    this.endpoint=endpoint
   }
   getall<T>(config:AxiosRequestConfig){
    apiClient.get<FetchRespone<T>>(this.endpoint,config).then((res)=>{
        return res.data 
    })
   }
}

export default apiServices