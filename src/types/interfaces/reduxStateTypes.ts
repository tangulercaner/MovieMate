import { Movie, MovieDetail } from 'types/interfaces/movieResponseTypes';

export interface MovieState {
  fetchMoviesIsLoading?: boolean;
  fetchMoviesError?: string;
  fetchMoviesIsSuccess?: boolean;
  fetchMoviesMessage?: string;
  movies: Movie[];
  lastPageIsReached?: boolean;
  totalMovieCount?: number;
  nextPageAvailable?: boolean;
  favoriteMovies: MovieDetail[];
}

export interface ReduxState {
  movie: MovieState;
}
