export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity:number;
  genre_ids: number[];
  [key: string]: any; // this is only for sorted by
}

export interface FetchMovieRespone{
  total_pages:number,
  total_results:number,
  results:Movie[]
}
export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails extends Movie {
  genres: { id: number; name: string }[];
  runtime: number;
  status: string;
  tagline: string;
  production_companies: {
    id: number;
    name: string;
    logo_path: string | null;
  }[];
}

export interface MovieCredits {
  cast: {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
  }[];
  crew: {
    id: number;
    name: string;
    job: string;
    profile_path: string | null;
  }[];
}

export interface MovieVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

export interface MovieVideosResponse {
  results: MovieVideo[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface GenresResponse {
  genres: Genre[];
} 

// Peoples types

export interface PeopleKnownByProps {
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
}
export interface PeopleGridProps {
  id: number;
  name: string;
  profile_path: string;
  known_for: PeopleKnownByProps[];
  popularity: number;
  adult: boolean;
  gender: number;
  original_name: string;
  known_for_department: string;
}

 export interface FetchPeopleRespone{
results:PeopleGridProps[];
}
//  the  tv shows
export interface TVShow {
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
  overview: string;
}
 export interface FetchTvShowsRespone{
  results:TVShow[];
  total_pages:number,
  total_results:number
 }
