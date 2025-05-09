import { PeopleGridProps } from "../../../types/api.types";
import UseGenericMovies from "../../movies/Hooks/UseGenericMovies";
  
const UsePeoples =(currentPage? :number)=> UseGenericMovies<PeopleGridProps>("person/popular",{},{params:{page:currentPage}},[currentPage]);

 export default UsePeoples
