import React, { ReactNode } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { Text } from '../Text';
import { styles } from './styles';

type Props = {
  children?: string | ReactNode;
  onPress?: () => void;
  type?: 'default' | 'unstyled';
  style?: ViewStyle;
};

export const Button = ({ children, onPress, type, style }: Props) => {
  return (
    <TouchableOpacity style={[type !== 'unstyled' && styles.button, style]} onPress={onPress}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </TouchableOpacity>
  );
};
