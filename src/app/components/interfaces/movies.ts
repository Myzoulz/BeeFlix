export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
}

export interface MainCarouselItem {
  id: number;
  backdrop: string;
}

export interface CarouselMovie {
  id: number;
  poster: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface CrewMember {
  name: string;
  job: string;
}

export interface CastMember {
  name: string;
  character: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  vote_average: number;
  genres: Genre[];
  credits: {
    crew: CrewMember[];
    cast: CastMember[];
  };
}

export interface SearchResult {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
}
