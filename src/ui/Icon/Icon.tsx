import React from 'react';
import { ViewStyle } from 'react-native';

import * as Svg from './components';
import { Colors } from '../../boot/variables';

type Props = {
  name: keyof typeof Svg;
  color?: keyof typeof Colors;
  size?: number;
  style?: ViewStyle;
};

export const Icon = ({ name, color = 'black', style, size = 24 }: Props) => {
  const ComponentName = Svg[name];

  return <ComponentName width={size} height={size} style={[style, { fill: Colors[color] }]} />;
};
