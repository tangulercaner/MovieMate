import {
  handleAddFavoriteMovie,
  handleRemoveFavoriteMovie,
  processMovieFetch,
} from 'redux/helpers/movieHelper';
import {
  MovieActions,
  MovieActionTypes,
} from 'types/interfaces/movieActionTypes';
import { MovieState } from 'types/interfaces/reduxStateTypes';

const INITIAL_STATE: MovieState = {
  movies: [],
  favoriteMovies: [],
};

const movieReducer = (state = INITIAL_STATE, action: MovieActions) => {
  switch (action.type) {
    case MovieActionTypes.fetchMoviesRequest:
      return {
        ...state,
        fetchMoviesIsLoading: true,
        fetchMoviesIsSuccess: false,
        fetchMoviesError: '',
        fetchMoviesMessage: '',
        lastPageIsReached: false,
      };
    case MovieActionTypes.fetchMoviesSuccess: {
      const { message, lastPageIsReached, movies } = processMovieFetch(
        action.payload,
        state,
      );

      return {
        ...state,
        movies,
        lastPageIsReached,
        fetchMoviesIsLoading: false,
        fetchMoviesIsSuccess: true,
        fetchMoviesError: '',
        fetchMoviesMessage: message,
      };
    }

    case MovieActionTypes.fetchMoviesFail:
      return {
        ...state,
        fetchMoviesIsLoading: false,
        fetchMoviesIsSuccess: false,
        fetchMoviesError: action.payload,
        fetchMoviesMessage: '',
        lastPageIsReached: true,
      };

    case MovieActionTypes.resetMovies:
      return {
        ...state,
        fetchMoviesIsLoading: false,
        fetchMoviesIsSuccess: false,
        fetchMoviesError: '',
        fetchMoviesMessage: '',
        movies: [],
      };

    case MovieActionTypes.loadFavoriteMoviesFromStorage:
      return {
        ...state,
        favoriteMovies: action.payload,
      };

    case MovieActionTypes.addFavoriteMovie: {
      const { favoriteMovies } = handleAddFavoriteMovie(action.payload, state);
      return {
        ...state,
        favoriteMovies,
      };
    }
    case MovieActionTypes.removeFavoriteMovie: {
      const { favoriteMovies } = handleRemoveFavoriteMovie(
        action.payload,
        state,
      );

      return {
        ...state,
        favoriteMovies,
      };
    }

    default:
      return state;
  }
};

export default movieReducer;
