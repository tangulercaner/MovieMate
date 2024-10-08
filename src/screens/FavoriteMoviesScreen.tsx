import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { CustomNavigationProp } from 'types/interfaces/navigationTypes';
import styled from 'styled-components/native';
import MovieList from 'components/MovieList/MovieList';
import { useSelector } from 'react-redux';
import { ReduxState } from 'types/interfaces/reduxStateTypes';
import { MovieDetail } from 'types/interfaces/movieResponseTypes';
import EmptySearchComponent from 'components/MovieList/EmptySearchComponent';
import { t } from 'i18next';

type FavoriteMoviesScreenNavigationProp =
  CustomNavigationProp<'FAVORITES_SCREEN'>;

const FavoriteMoviesScreen: React.FC = () => {
  const navigation = useNavigation<FavoriteMoviesScreenNavigationProp>();
  const favoriteMovies = useSelector(
    (state: ReduxState) => state.movie.favoriteMovies,
  );

  const navigateToMovieDetails = (movieDetail: MovieDetail) => {
    navigation.navigate('MOVIE_DETAILS_SCREEN', { movieDetail });
  };

  return (
    <Container>
      <MovieList
        movies={favoriteMovies}
        onMovieItemPressed={navigateToMovieDetails}
        listEmptyComponent={
          <EmptySearchComponent message={t('no_favorite_message')} />
        }
      />
    </Container>
  );
};

export default FavoriteMoviesScreen;

const Container = styled.View`
  flex: 1;
  margin-horizontal: 24px;
`;
