import React, { Dispatch } from "react"
import { CurrentPageProps } from "../reducer/TvshowsPagereducers"

 interface Props{
    pagestate:number
    pagedispatch:Dispatch<CurrentPageProps>
 }


const TvshowsPageContext = React.createContext<Props>({} as Props)

export default TvshowsPageContext