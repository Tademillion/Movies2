import { Movie } from "../types/api.types"
import apiServices from "./apiServices" 
const moviesServices= new apiServices<Movie>("/discover/movie");
 export default moviesServices
   