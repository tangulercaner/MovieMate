import { t } from 'i18next';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import colors from 'styles/colors';
import {
  DropdownMenuItem,
  DropdownMenuItemValue,
} from 'types/interfaces/componentTypes';

interface Props {
  value: DropdownMenuItemValue;
  setValue: (value: DropdownMenuItemValue) => void;
  data: DropdownMenuItem[];
  enableSearch?: boolean;
}

const DropdownMenu = ({ value, setValue, data, enableSearch }: Props) => {
  return (
    <Dropdown
      style={styles.dropdown}
      inputSearchStyle={styles.inputSearchStyle}
      data={data}
      search={enableSearch}
      maxHeight={220}
      labelField="label"
      valueField="value"
      searchPlaceholder={t('dropdown_menu_search_placeholder')}
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  dropdown: {
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 12,
    padding: 8,
    flex: 1,
  },
  inputSearchStyle: {
    height: 40,
  },
});

export default DropdownMenu;
