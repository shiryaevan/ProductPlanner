import React from 'react';
import { Text as NativeText } from 'react-native';

type Props = {
  children: string;
};

export const Text = ({ children }: Props) => {
  return <NativeText>{children}</NativeText>;
};
