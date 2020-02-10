import { StyleSheet } from 'react-native';

import { Colors } from '../../boot/variables';

export const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
