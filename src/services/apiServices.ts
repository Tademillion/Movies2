import apiClient from './apiClient';
import { FetchRespone } from '../components/UseData';
import { AxiosRequestConfig } from 'axios';
import { keepPreviousData } from '@tanstack/react-query';

const AxiosInstance = apiClient.create({
  baseURL: 'https://api.themoviedb.org/3',  
});

class apiServices<T>  {
    endpoint:string;
   constructor(endpoint:string){
    this.endpoint=endpoint
   }
   getall= (config:AxiosRequestConfig)=>{
    //  we use  arrow function because it this is points to the parent objects
  return  AxiosInstance.get<FetchRespone<T>>(this.endpoint, config).then((res)=>{
     keepPreviousData:true
        return res.data.results
    })
   }
}

export default apiServices