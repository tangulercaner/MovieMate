import { Movie, MovieDetail } from 'types/interfaces/movieResponseTypes';
import { ApiResponse } from 'types/interfaces/networkTypes';

export enum MovieActionTypes {
  fetchMoviesRequest = 'FETCH_MOVIES_REQUEST',
  fetchMoviesSuccess = 'FETCH_MOVIES_SUCCESS',
  fetchMoviesFail = 'FETCH_MOVIES_FAIL',
  loadFavoriteMoviesFromStorage = 'LOAD_FAVORITE_MOVIES_FROM_STORAGE',
  addFavoriteMovie = 'ADD_FAVORITE_MOVIE',
  removeFavoriteMovie = 'REMOVE_FAVORITE_MOVIE',
  resetMovies = 'RESET_MOVIES',
}

export type FetchMovieSuccessPaylod = {
  data: ApiResponse<Movie>;
  isFirstPage: boolean;
};

export interface FetchMoviesRequestAction {
  type: MovieActionTypes.fetchMoviesRequest;
}

export interface FetchMoviesSuccessAction {
  type: MovieActionTypes.fetchMoviesSuccess;
  payload: FetchMovieSuccessPaylod;
}

export interface FetchMoviesFailAction {
  type: MovieActionTypes.fetchMoviesFail;
  payload: string;
}

export interface LoadFavoriteMoviesFromStorageAction {
  type: MovieActionTypes.loadFavoriteMoviesFromStorage;
  payload: MovieDetail[];
}

export interface AddFavoriteMovieAction {
  type: MovieActionTypes.addFavoriteMovie;
  payload: MovieDetail;
}

export interface RemoveFavoriteMovieAction {
  type: MovieActionTypes.removeFavoriteMovie;
  payload: string;
}

export interface ResetMoviesAction {
  type: MovieActionTypes.resetMovies;
}

export type MovieActions =
  | FetchMoviesRequestAction
  | FetchMoviesSuccessAction
  | FetchMoviesFailAction
  | LoadFavoriteMoviesFromStorageAction
  | AddFavoriteMovieAction
  | RemoveFavoriteMovieAction
  | ResetMoviesAction;
