import { TVShow } from "../../../types/api.types";
import UseData from "../../UseData";

 const UseTvShowsGeneric=(endpoint:string)=>
    UseData<TVShow>(endpoint?"tv/"+endpoint:"tv/popular");
  export default UseTvShowsGeneric