import { IMDB_BASE_LINK } from 'helper/constants';
import { store } from 'redux/store';
import { DropdownMenuItem } from 'types/interfaces/componentTypes';
import { ReduxState } from 'types/interfaces/reduxStateTypes';

export const isMovieAddedFavorite = (movieId: string) => {
  const state: ReduxState = store.getState();
  const { favoriteMovies } = state.movie;
  return favoriteMovies.some(movie => movie.imdbID === movieId);
};

export const generateYearsDropdownData = (
  startYear: number = 1960,
): DropdownMenuItem[] => {
  const currentYear = new Date().getFullYear();

  return [
    { label: 'All Years', value: 'all' },
    ...Array.from({ length: currentYear - startYear + 1 }, (_, i) => ({
      label: (currentYear - i).toString(),
      value: (currentYear - i).toString(),
    })),
  ];
};

export const generateImdbLink = (imdbId: string) => {
  return `${IMDB_BASE_LINK}${imdbId}`;
};
