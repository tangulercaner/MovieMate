import React from 'react';
import styled from 'styled-components/native';
import colors from 'styles/colors';

interface Props {
  keyText: string;
  valueText: string;
  valueOnPress?: () => void;
}

const DetailRow = ({ keyText, valueText, valueOnPress }: Props) => {
  return (
    <Row>
      <Key>{keyText}</Key>
      <Value onPress={valueOnPress} isPressable={!!valueOnPress}>
        {valueText}
      </Value>
    </Row>
  );
};

export default DetailRow;

const Row = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

const Key = styled.Text`
  flex: 1;
`;

const Value = styled.Text<{ isPressable: boolean }>`
  color: ${({ isPressable }) =>
    isPressable ? colors.oceanDepths : colors.black};
  text-decoration-line: ${({ isPressable }) =>
    isPressable ? 'underline' : 'none'};
  flex: 3;
`;
