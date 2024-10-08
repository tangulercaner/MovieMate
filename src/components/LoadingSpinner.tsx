import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import colors from 'styles/colors';

interface Props {
  isLoading?: boolean;
  size?: 'small' | 'large';
  pointerEvents?: 'none' | 'auto';
}

const LoadingSpinner = ({
  isLoading,
  size = 'small',
  pointerEvents = 'auto',
}: Props) => {
  return isLoading ? (
    <MainContainer pointerEvents={pointerEvents}>
      <ActivityIndicator size={size} color={colors.white} />
    </MainContainer>
  ) : null;
};

export default LoadingSpinner;

const MainContainer = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
