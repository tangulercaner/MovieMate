import { saveDataToStorage } from 'storage/AsyncStorageHelper';
import { LocalStorageKeys, RequestSuccess } from 'types/enums/enums';
import { MovieDetail } from 'types/interfaces/movieResponseTypes';
import { MovieState } from 'types/interfaces/reduxStateTypes';
import { FetchMovieSuccessPaylod } from 'types/interfaces/movieActionTypes';

export const processMovieFetch = (
  payload: FetchMovieSuccessPaylod,
  state: MovieState,
) => {
  const { Search, Response, Error } = payload.data;
  const { isFirstPage } = payload;

  const message = Error || '';
  let movies = isFirstPage ? [] : state.movies;
  let lastPageIsReached = false;

  if (Response === RequestSuccess.TRUE && Search) {
    movies = [...movies, ...Search];
  } else {
    lastPageIsReached = !isFirstPage;
  }

  return {
    message,
    movies,
    lastPageIsReached,
  };
};

export const handleAddFavoriteMovie = (
  payload: MovieDetail,
  state: MovieState,
) => {
  const favoriteMovies = [payload, ...state.favoriteMovies];
  saveDataToStorage<MovieDetail[]>(
    LocalStorageKeys.favoriteMovies,
    favoriteMovies,
  );

  return { favoriteMovies };
};

export const handleRemoveFavoriteMovie = (
  payload: string,
  state: MovieState,
) => {
  const favoriteMovies = state.favoriteMovies.filter(
    movie => movie.imdbID !== payload,
  );
  saveDataToStorage<MovieDetail[]>(
    LocalStorageKeys.favoriteMovies,
    favoriteMovies,
  );

  return { favoriteMovies };
};
