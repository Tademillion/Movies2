import React from 'react'
import { TvshowsreducerProps } from '../reducer/Tvshowsreducer';

 interface Props{
    state:string;
    dispatch:React.Dispatch<TvshowsreducerProps>;
 }
        const TvshowsContext=   React.createContext<Props>({} as Props)

export default TvshowsContext