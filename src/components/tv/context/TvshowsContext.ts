import React from 'react'
import { TvshowsReducers } from '../reducer/Tvshowsreducer';
 
 interface Props{
    state:string;
    dispatch:React.Dispatch<TvshowsReducers>;
 }
        const TvshowsContext=   React.createContext<Props>({} as Props)

export default TvshowsContext