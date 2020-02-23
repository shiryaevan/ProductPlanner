import { StyleSheet } from 'react-native';

import { Colors } from '../../boot/variables';

export const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 20,
    height: 20,
    transform: [{ translateX: -10 }, { translateY: -10 }],
  },
});
