import Icons from 'assets/Icons';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import colors from 'styles/colors';
import { ReduxState } from 'types/interfaces/reduxStateTypes';

const NoMoviesFoundComponent = () => {
  const fetchMoviesIsLoading = useSelector(
    (state: ReduxState) => state.movie.fetchMoviesIsLoading,
  );

  const fetchMoviesMessage = useSelector(
    (state: ReduxState) => state.movie.fetchMoviesMessage,
  );

  if (fetchMoviesIsLoading) {
    return null;
  }

  return (
    <Container>
      <Icons
        name="warning"
        fill={colors.oceanDepths}
        width={180}
        height={180}
      />
      <Message>{fetchMoviesMessage}</Message>
    </Container>
  );
};

export default NoMoviesFoundComponent;

const Container = styled.View`
  margin-top: 48px;
  align-items: center;
`;

const Message = styled.Text`
  font-size: 18px;
  color: ${colors.oceanDepths};
`;
