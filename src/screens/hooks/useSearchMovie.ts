import { t } from 'i18next';
import { isEmpty } from 'lodash';
import { RefObject, useEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { fetchMovies, resetMovies } from 'redux/actions/movieActions';
import { useAppDispatch } from 'redux/useAppDispatch';
import { MovieType } from 'types/enums/enums';
import { DropdownMenuItemValue } from 'types/interfaces/componentTypes';
import { Movie } from 'types/interfaces/movieResponseTypes';
import { ReduxState } from 'types/interfaces/reduxStateTypes';

interface IReturnType {
  setSearchQuery: (query: string) => void;
  onEndReached: () => void;
  searchQuery: string;
  fetchMoviesIsLoading?: boolean;
  movies: Movie[];
  searchMovie: () => void;
  movieYear: DropdownMenuItemValue;
  movieType: DropdownMenuItemValue;
  setMovieYear: (year: DropdownMenuItemValue) => void;
  setMovieType: (type: DropdownMenuItemValue) => void;
  isSearchOngoing: boolean;
  flatListRef: RefObject<FlatList>;
}

const useSearchMovie = (): IReturnType => {
  const dispatch = useAppDispatch();
  const flatListRef = useRef<FlatList>(null);
  const [page, setPage] = useState<number>(1);

  const [isSearchOngoing, setIsSearchOngoing] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [movieYear, setMovieYear] = useState<DropdownMenuItemValue>('all');
  const [movieType, setMovieType] = useState<DropdownMenuItemValue>('all');

  const lastPageIsReached = useSelector(
    (state: ReduxState) => state.movie.lastPageIsReached,
  );

  const fetchMoviesIsLoading = useSelector(
    (state: ReduxState) => state.movie.fetchMoviesIsLoading,
  );

  const movies = useSelector((state: ReduxState) => state.movie.movies);
  const fetchMoviesError = useSelector(
    (state: ReduxState) => state.movie.fetchMoviesError,
  );

  useEffect(() => {
    if (fetchMoviesError) {
      Alert.alert(t('something_went_wrong'), fetchMoviesError);
    }
  }, [fetchMoviesError]);

  useEffect(() => {
    if (searchQuery.length === 0) {
      setIsSearchOngoing(false);
      dispatch(resetMovies());
    }
  }, [dispatch, searchQuery]);

  const getSearchParameters = (pageNumber: number) => {
    const type = movieType === 'all' ? undefined : (movieType as MovieType);
    const year = movieYear === 'all' ? undefined : movieYear;

    return {
      s: searchQuery,
      page: pageNumber,
      type,
      y: year,
    };
  };

  const searchMovie = () => {
    setIsSearchOngoing(true);
    setPage(1);
    const params = getSearchParameters(1);
    dispatch(fetchMovies(params));
    if (!isEmpty(movies)) {
      flatListRef.current?.scrollToIndex({ animated: true, index: 0 });
    }
  };

  const onEndReached = () => {
    if (isEmpty(movies) || lastPageIsReached || fetchMoviesIsLoading) {
      return;
    }

    const nextPage = page + 1;
    setPage(nextPage);
    const params = getSearchParameters(nextPage);
    dispatch(fetchMovies(params));
  };

  return {
    onEndReached,
    setSearchQuery,
    searchQuery,
    fetchMoviesIsLoading,
    movies,
    searchMovie,
    movieType,
    movieYear,
    setMovieType,
    setMovieYear,
    isSearchOngoing,
    flatListRef,
  };
};

export default useSearchMovie;
