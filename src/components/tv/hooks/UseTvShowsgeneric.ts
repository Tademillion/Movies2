import { TVShow } from "../../../types/api.types";
import UseData from "../../UseData";
import { TvshowsEndpointProps } from "../TVShowsPage";

 const UseTvShowsGeneric=({endpoint}:TvshowsEndpointProps)=>
    UseData<TVShow>(endpoint?"tv/"+endpoint:"tv/popular");
  export default UseTvShowsGeneric