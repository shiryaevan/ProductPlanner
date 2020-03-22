import React, { FC } from 'react';
import { Text as NativeText } from 'react-native';

type Props = {};

export const Text: FC<Props> = ({ children }) => {
  return <NativeText>{children}</NativeText>;
};
