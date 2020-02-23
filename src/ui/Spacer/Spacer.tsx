import React, { ReactNode } from 'react';
import { View } from 'react-native';

type Props = {
  margin?: keyof typeof defaultConfig | string;
  marginRight?: keyof typeof defaultConfig | string;
  config?: { [key: string]: number };
  children?: ReactNode;
};

const defaultConfig = { xxs: 4, xs: 8, sm: 12, default: 16, lg: 20, xlg: 32, none: 0 };

export const Spacer = ({
  margin = 'default',
  marginRight = 'none',
  config = defaultConfig,
  children,
  ...rest
}: Props) => {
  const stylesObject = {
    marginBottom: config[margin],
    marginRight: config[marginRight],
  };

  return (
    <View style={stylesObject} {...rest}>
      {children}
    </View>
  );
};
