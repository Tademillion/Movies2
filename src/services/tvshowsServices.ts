import { TvshowsEndpointProps } from "../components/tv/TVShowsPage";
import { TVShow } from "../types/api.types";
import apiServices from "./apiServices";
const tvshowsServices=(endpoint:string)=>  new apiServices<TVShow>(endpoint);
 export default  tvshowsServices