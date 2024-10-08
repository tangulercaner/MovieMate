import React from 'react';
import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import colors from 'styles/colors';

interface Props {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  disabled?: boolean;
}

const CustomButton = ({ onPress, title, style, disabled }: Props) => {
  return (
    <Button onPress={onPress} style={style} disabled={disabled}>
      <ButtonTitle>{title}</ButtonTitle>
    </Button>
  );
};

export default CustomButton;

const Button = styled.TouchableOpacity<{ disabled?: boolean }>`
  align-self: center;
  background-color: ${({ disabled }) =>
    disabled ? colors.dustyGray : colors.coralFlame};
  padding-vertical: 8px;
  padding-horizontal: 14px;
  border-radius: 16px;
  margin-top: 12px;
`;

const ButtonTitle = styled.Text`
  color: ${colors.white};
`;
