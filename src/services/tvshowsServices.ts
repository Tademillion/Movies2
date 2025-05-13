import { TvshowsEndpointProps } from "../components/tv/TVShowsPage";
import apiServices from "./apiServices";

const tvShowsServices =({endpoint,currentPage}:TvshowsEndpointProps) => {
    return new apiServices<TvshowsEndpointProps>(endpoint ? `tv/${endpoint}` : "tv/popular").getall({
        params: {page:currentPage}
    })
}
 export default tvShowsServices;