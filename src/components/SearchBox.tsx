import { t } from 'i18next';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  onChangeText: (text: string) => void;
  value: string;
  onSubmitEditing?: () => void;
}

const SearchBox = ({ onChangeText, value, onSubmitEditing }: Props) => {
  return (
    <SearchInput
      onChangeText={onChangeText}
      value={value}
      placeholder={t('search_box_placeholder')}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

export default SearchBox;

const SearchInput = styled.TextInput`
  border-width: 1px;
  padding: 8px;
  margin-vertical: 12px;
  border-radius: 12px;
`;
