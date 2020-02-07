import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  paddingHorizontal: number;
  paddingVertical: number;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
};

export const Container = ({
  paddingHorizontal = 20,
  paddingVertical = 20,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  ...rest
}: Props) => {
  const styles = StyleSheet.create({
    paddingHorizontal: paddingHorizontal,
  });

  return <View style={styles} {...rest} />;
};
