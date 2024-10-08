import { MovieType } from 'types/enums/enums';

export interface FetchMoviesRequest {
  s: string;
  type?: MovieType;
  y?: string;
  page: number;
}
export interface FetchMovieDetailRequest {
  i: string;
}
