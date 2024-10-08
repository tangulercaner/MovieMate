import React from 'react';
import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from 'types/interfaces/componentTypes';

const Warning = ({
  width = 24,
  height = 24,
  fill = '#8CA0B3',
  ...rest
}: IconProps): React.ReactElement => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
      <Path
        fill={fill || '#8CA0B3'}
        fillRule="evenodd"
        d="M20.867 19.31L13.016 4.599A1.13 1.13 0 0012.019 4h-.001c-.418 0-.8.23-.997.598l-7.887 14.71c-.188.354-.178.777.026 1.117.205.34.574.55.971.55h15.737a1.13 1.13 0 00.999-1.665zm-8.85-.599a1.132 1.132 0 11.001-2.264 1.132 1.132 0 010 2.264zm1.133-4.508a1.132 1.132 0 01-2.263 0V9.676a1.132 1.132 0 012.263 0v4.527z"
      />
    </Svg>
  );
};

const Heart = ({
  width = 24,
  height = 24,
  fill = '#e63d3d',
  ...rest
}: IconProps): React.ReactElement => {
  return (
    <Svg
      fill={fill}
      height={height}
      width={width}
      viewBox="0 0 24 24"
      stroke={fill}
      {...rest}>
      <G stroke-width="0" />
      <G stroke-linecap="round" stroke-linejoin="round" />
      <G>
        <G>
          <Path d="M12,22C9.63,20.17,1,13.12,1,7.31C1,4.38,3.47,2,6.5,2c1.9,0,3.64,0.93,4.65,2.48L12,5.78l0.85-1.3 C13.86,2.93,15.6,2,17.5,2C20.53,2,23,4.38,23,7.31C23,13.15,14.38,20.18,12,22z" />
        </G>
      </G>
    </Svg>
  );
};

const Movie = ({
  width = 24,
  height = 24,
  fill = '#e63d3d',
  ...rest
}: IconProps): React.ReactElement => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      {...rest}>
      <G stroke-width="0" />

      <G
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <G id="SVGRepo_iconCarrier">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 1H3V3H5V1H11V3H13V1H15V15H13V13H11V15H5V13H3V15H1V1ZM3 9H5V11H3V9ZM13 9H11V11H13V9ZM3 5H5V7H3V5ZM13 5H11V7H13V5Z"
          fill={fill}
        />
      </G>
    </Svg>
  );
};

export default function Icons(props: IconProps): React.ReactElement | null {
  let SvgIcon = null;

  if (props.name === 'warning') {
    SvgIcon = <Warning {...props} />;
  }

  if (props.name === 'heart') {
    SvgIcon = <Heart {...props} />;
  }
  if (props.name === 'movie') {
    SvgIcon = <Movie {...props} />;
  }

  return (
    <View
      style={{
        ...props.style,
      }}>
      {SvgIcon}
    </View>
  );
}
