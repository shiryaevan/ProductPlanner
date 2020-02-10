import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

import { Text } from '../';
import { styles } from './styles';

type Props = {
  children?: string | ReactNode;
  onPress?: () => void;
};

export const Button = ({ children, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {typeof children === 'string' ? <Text>{children}</Text> : { children }}
    </TouchableOpacity>
  );
};
