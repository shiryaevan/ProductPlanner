import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  paddingHorizontal?: number;
  paddingVertical?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  children?: ReactNode;
};

export const Container = ({
  paddingHorizontal = 20,
  paddingVertical = 20,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  children,
}: Props) => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal,
      paddingVertical,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
    },
  });

  return <View style={styles.container}>{children}</View>;
};
