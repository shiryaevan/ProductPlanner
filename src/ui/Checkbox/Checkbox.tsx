import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { Icon } from '../Icon/';

type Props = {
  onPress?: () => void;
  checked?: boolean;
};

export const Checkbox = ({ checked: defaultValue, onPress = () => {} }: Props) => {
  const [checked, setChecked] = useState(defaultValue);

  const handleOnPress = () => {
    setChecked(!checked);
    onPress();
  };

  return (
    <TouchableOpacity style={styles.checkbox} onPress={handleOnPress}>
      {checked && <Icon name="Check" color="primary" size={20} style={styles.icon} />}
    </TouchableOpacity>
  );
};
