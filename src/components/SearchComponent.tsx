import CustomButton from 'components/CustomButton';
import DropdownMenu from 'components/DropdownMenu';
import SearchBox from 'components/SearchBox';
import { MovieTypeDropdownData } from 'helper/constants';
import { generateYearsDropdownData } from 'helper/utils';
import { t } from 'i18next';
import React from 'react';
import styled from 'styled-components/native';
import { DropdownMenuItemValue } from 'types/interfaces/componentTypes';

interface Props {
  onChangeText: (text: string) => void;
  searchQuery: string;
  onSearchPressed: () => void;
  movieYear: DropdownMenuItemValue;
  movieType: DropdownMenuItemValue;
  setMovieYear: (year: DropdownMenuItemValue) => void;
  setMovieType: (type: DropdownMenuItemValue) => void;
}

const YearsDropdownData = generateYearsDropdownData();

const SearchComponent = ({
  onChangeText,
  searchQuery,
  onSearchPressed,
  movieType,
  movieYear,
  setMovieType,
  setMovieYear,
}: Props) => {
  return (
    <Container>
      <SearchBox
        onChangeText={onChangeText}
        value={searchQuery}
        onSubmitEditing={searchQuery ? onSearchPressed : undefined}
      />
      <Row>
        <DropdownMenu
          data={YearsDropdownData}
          value={movieYear}
          setValue={setMovieYear}
          enableSearch
        />
        <Seperator />
        <DropdownMenu
          data={MovieTypeDropdownData}
          value={movieType}
          setValue={setMovieType}
        />
      </Row>
      <SearchButton
        onPress={onSearchPressed}
        title={t('search')}
        disabled={!searchQuery}
      />
    </Container>
  );
};

export default SearchComponent;

const Container = styled.View`
  margin-bottom: 8px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Seperator = styled.View`
  width: 8px;
`;

const SearchButton = styled(CustomButton)`
  align-self: flex-end;
`;
