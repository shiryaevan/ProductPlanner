import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { Icon } from '../Icon/';

type Props = {
  onChange?: (e: any) => void;
  checked?: boolean;
};

export const Checkbox = ({ checked, onChange = () => {} }: Props) => {
  const handleOnPress = useCallback(() => {
    onChange(!checked);
  }, [checked, onChange]);

  return (
    <TouchableOpacity style={styles.checkbox} onPress={handleOnPress}>
      {checked && <Icon name="Check" color="primary" size={20} style={styles.icon} />}
    </TouchableOpacity>
  );
};
