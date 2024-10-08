import React from 'react';
import LoadingSpinner from 'components/LoadingSpinner';
import MovieList from 'components/MovieList/MovieList';
import styled from 'styled-components/native';
import useSearchMovie from 'screens/hooks/useSearchMovie';
import useGetMovieDetails from 'screens/hooks/useGetMovieDetails';
import SearchComponent from 'components/SearchComponent';
import EmptySearchComponent from 'components/MovieList/EmptySearchComponent';
import NoMoviesFoundComponent from 'components/MovieList/NoMoviesFoundComponent';
import { t } from 'i18next';

const MovieListScreen: React.FC = () => {
  const {
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
  } = useSearchMovie();

  const { navigateToMovieDetails, movieDetailIsLoading } = useGetMovieDetails();

  return (
    <Container>
      <SearchComponent
        onChangeText={setSearchQuery}
        searchQuery={searchQuery}
        onSearchPressed={searchMovie}
        movieType={movieType}
        movieYear={movieYear}
        setMovieType={setMovieType}
        setMovieYear={setMovieYear}
      />
      <LoadingSpinner
        isLoading={movieDetailIsLoading || fetchMoviesIsLoading}
        pointerEvents={fetchMoviesIsLoading ? 'none' : 'auto'}
        size="large"
      />
      {isSearchOngoing ? (
        <MovieList
          flatListRef={flatListRef}
          movies={movies}
          onEndReached={onEndReached}
          onMovieItemPressed={navigateToMovieDetails}
          listEmptyComponent={<NoMoviesFoundComponent />}
        />
      ) : (
        <EmptySearchComponent message={t('empty_search_message')} />
      )}
    </Container>
  );
};

export default MovieListScreen;

const Container = styled.View`
  flex: 1;
  margin-horizontal: 24px;
`;
