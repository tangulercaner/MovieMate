import React from 'react';
import { Linking, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CustomRouteProp } from 'types/interfaces/navigationTypes';
import styled from 'styled-components/native';
import { NO_IMAGE } from 'helper/constants';
import { t } from 'i18next';
import DetailRow from 'components/DetailRow';
import FavoriteButton from 'components/FavoriteButton';
import { generateImdbLink, isMovieAddedFavorite } from 'helper/utils';
import { useAppDispatch } from 'redux/useAppDispatch';
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from 'redux/actions/movieActions';
import Images from 'assets/Images';

type MovieDetailsScreenRouteProp = CustomRouteProp<'MOVIE_DETAILS_SCREEN'>;

const MovieDetailsScreen: React.FC = () => {
  const route = useRoute<MovieDetailsScreenRouteProp>();
  const dispatch = useAppDispatch();

  const { Poster, Title, Actors, Year, imdbID } = route.params.movieDetail;

  const onFavoritePressed = () => {
    const { movieDetail } = route.params;
    dispatch(addFavoriteMovie(movieDetail));
  };

  const onUnfavoritePressed = () => {
    dispatch(removeFavoriteMovie(imdbID));
  };

  return (
    <Container style={styles.container}>
      {Poster === NO_IMAGE ? (
        <MovieImage
          resizeMode="cover"
          source={Images.movieImageWithBackground}
        />
      ) : (
        <MovieImage resizeMode="stretch" source={{ uri: Poster }} />
      )}
      <DetailRow keyText={t('movie_detail_title')} valueText={Title} />
      <DetailRow keyText={t('movie_detail_actors')} valueText={Actors} />
      <DetailRow keyText={t('movie_detail_year')} valueText={Year} />
      <DetailRow
        keyText={t('movie_detail_imdb_id')}
        valueText={imdbID}
        valueOnPress={() => Linking.openURL(generateImdbLink(imdbID))}
      />
      <FavoriteButton
        isFavoriteInitially={isMovieAddedFavorite(imdbID)}
        onFavoritePressed={onFavoritePressed}
        onUnfavoritePressed={onUnfavoritePressed}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MovieDetailsScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  margin: 24px;
`;

const MovieImage = styled.Image`
  width: 200px;
  height: 300px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  margin-bottom: 24px;
  align-self: center;
`;
