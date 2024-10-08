import { Dispatch } from '@reduxjs/toolkit';
import { movieService } from 'services/MovieService';
import { getDataFromStorage } from 'storage/AsyncStorageHelper';
import { LocalStorageKeys } from 'types/enums/enums';
import {
  AddFavoriteMovieAction,
  FetchMoviesFailAction,
  FetchMoviesRequestAction,
  FetchMoviesSuccessAction,
  LoadFavoriteMoviesFromStorageAction,
  MovieActions,
  MovieActionTypes,
  RemoveFavoriteMovieAction,
  ResetMoviesAction,
} from 'types/interfaces/movieActionTypes';
import { FetchMoviesRequest } from 'types/interfaces/movieRequestTypes';
import { MovieDetail } from 'types/interfaces/movieResponseTypes';

export const fetchMovies = (requestData: FetchMoviesRequest) => {
  return async (dispatch: Dispatch<MovieActions>): Promise<void> => {
    dispatch<FetchMoviesRequestAction>({
      type: MovieActionTypes.fetchMoviesRequest,
    });

    try {
      const response = await movieService.getMovies(requestData);
      const isFirstPage = requestData.page === 1;

      dispatch<FetchMoviesSuccessAction>({
        type: MovieActionTypes.fetchMoviesSuccess,
        payload: { data: response, isFirstPage },
      });
    } catch (error) {
      dispatch<FetchMoviesFailAction>({
        type: MovieActionTypes.fetchMoviesFail,
        payload: error as string,
      });
    }
  };
};

export const resetMovies = () => {
  return async (dispatch: Dispatch<MovieActions>): Promise<void> => {
    dispatch<ResetMoviesAction>({
      type: MovieActionTypes.resetMovies,
    });
  };
};

export const loadFavoriteMoviesFromStorage = () => {
  return async (dispatch: Dispatch<MovieActions>): Promise<void> => {
    const favoriteCharactersStorage = await getDataFromStorage<MovieDetail[]>(
      LocalStorageKeys.favoriteMovies,
    );

    if (favoriteCharactersStorage) {
      dispatch<LoadFavoriteMoviesFromStorageAction>({
        type: MovieActionTypes.loadFavoriteMoviesFromStorage,
        payload: favoriteCharactersStorage,
      });
    }
  };
};

export const addFavoriteMovie = (movieDetail: MovieDetail) => {
  return async (dispatch: Dispatch<MovieActions>): Promise<void> => {
    dispatch<AddFavoriteMovieAction>({
      type: MovieActionTypes.addFavoriteMovie,
      payload: movieDetail,
    });
  };
};

export const removeFavoriteMovie = (movieId: string) => {
  return async (dispatch: Dispatch<MovieActions>): Promise<void> => {
    dispatch<RemoveFavoriteMovieAction>({
      type: MovieActionTypes.removeFavoriteMovie,
      payload: movieId,
    });
  };
};
