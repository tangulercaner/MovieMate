import Images from 'assets/Images';
import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import colors from 'styles/colors';

interface Props {
  message: string;
}

const EmptySearchComponent = ({ message }: Props) => {
  return (
    <Container>
      <MovieImage source={Images.movieImage} />
      <Message>{message}</Message>
    </Container>
  );
};

export default EmptySearchComponent;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;

const Message = styled.Text`
  font-size: 18px;
  color: ${colors.coralFlame};
`;

const MovieImage = styled(Image)`
  width: 200px;
  height: 200px;
`;
