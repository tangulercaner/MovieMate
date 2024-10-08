import { MovieType, RequestSuccess } from 'types/enums/enums';

export interface Movie {
  Poster: string;
  Title: string;
  Type: MovieType;
  Year: string;
  imdbID: string;
}

export interface MovieDetail extends Movie {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: MovieRatings[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: RequestSuccess;
}

export interface MovieRatings {
  Source: string;
  Value: string;
}
