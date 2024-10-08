import Images from 'assets/Images';
import { NO_IMAGE } from 'helper/constants';
import React from 'react';
import styled from 'styled-components/native';
import colors from 'styles/colors';
import { Movie } from 'types/interfaces/movieResponseTypes';

interface Props {
  item: Movie;
  onPress: () => void;
}

const MovieListItem = ({ item, onPress }: Props) => {
  const { Poster, Title, imdbID } = item;
  return (
    <MovieButton key={imdbID} onPress={onPress}>
      {Poster === NO_IMAGE ? (
        <MovieImage
          resizeMode="cover"
          source={Images.movieImageWithBackground}
        />
      ) : (
        <MovieImage resizeMode="stretch" source={{ uri: Poster }} />
      )}
      <MovieTitle>{Title}</MovieTitle>
    </MovieButton>
  );
};
export default MovieListItem;

const MovieButton = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 12px;
  background-color: ${colors.oceanDepths};
`;

const MovieImage = styled.Image`
  width: 60px;
  height: 80px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;

const MovieTitle = styled.Text`
  flex: 1;
  margin-horizontal: 12px;
  align-self: center;
  color: ${colors.white};
`;
