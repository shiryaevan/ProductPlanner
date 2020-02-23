import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  aligner: {
    flexDirection: 'row',
  },
  alignerwWrap: {
    flexWrap: 'wrap',
  },

  alignerCenter: {
    alignItems: 'center',
  },

  alignerTop: {
    alignItems: 'flex-start',
  },

  alignerBottom: {
    alignItems: 'flex-end',
  },

  alignerBaseline: {
    alignItems: 'baseline',
  },

  center: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  left: {
    flex: 1,
    minWidth: 0,
  },

  right: {
    marginLeft: 'auto',
    paddingLeft: 16,
    flex: 0,
    maxWidth: '100%',
  },
});
