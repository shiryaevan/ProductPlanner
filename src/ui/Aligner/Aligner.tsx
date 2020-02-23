import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

const Left: FC = ({ children }) => <View style={styles.left}>{children}</View>;

type RightProps = {
  children: ReactNode;
  paddingLeft?: number;
};

const Right = ({ children, paddingLeft }: RightProps) => {
  return <View style={[styles.right, { paddingLeft }]}>{children}</View>;
};
const Center: FC = ({ children }) => <View style={styles.center}>{children}</View>;

export type Props = {
  valign: 'center' | 'top' | 'baseline' | 'bottom';
  wrap?: boolean;
};

export class Aligner extends React.Component<Props> {
  static Left = Left;
  static Right = Right;
  static Center = Center;
  static defaultProps = { valign: 'center' };

  render() {
    const { children, valign, wrap, ...rest } = this.props;

    return (
      <View
        style={[
          styles.aligner,
          wrap && styles.alignerwWrap,
          valign === 'center' && styles.alignerCenter,
          valign === 'top' && styles.alignerTop,
          valign === 'bottom' && styles.alignerBottom,
          valign === 'baseline' && styles.alignerBaseline,
        ]}
        {...rest}
      >
        {children}
      </View>
    );
  }
}
