import React from 'react';
import { TextInput as NativeTextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export type PropsTextInput = {} & TextInputProps;

export const TextInput = ({ ...rest }: PropsTextInput) => {
  return <NativeTextInput style={styles.input} {...rest} />;
};
