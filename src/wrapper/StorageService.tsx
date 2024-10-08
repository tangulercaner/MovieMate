import React, { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../redux/useAppDispatch';
import { loadFavoriteMoviesFromStorage } from 'redux/actions/movieActions';

const AsyncStorageService = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const loadFavoriteMovies = useCallback(async () => {
    dispatch(loadFavoriteMoviesFromStorage());
  }, [dispatch]);

  useEffect(() => {
    loadFavoriteMovies();
  }, [loadFavoriteMovies]);

  return <></>;
};

export default AsyncStorageService;
