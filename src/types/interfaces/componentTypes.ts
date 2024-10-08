import { ViewProps, ViewStyle } from 'react-native';

export interface DropdownMenuItem {
  label: string;
  value: DropdownMenuItemValue;
}

export type DropdownMenuItemValue = string | 'all';

export interface IconProps extends ViewProps {
  name?: string;
  width?: number;
  height?: number;
  fill?: string;
  fillOpacity?: number;
  style?: ViewStyle;
  testID?: string;
  onPress?: () => void;
  viewBox?: string;
}
