import React from 'react';
import { View } from 'react-native';

import { IIngredient } from '../../store/recipes/interfaces';
import { Text } from '../../ui/';

type Props = {} & IIngredient;

export const Ingredient = ({ title, count }: Props) => {
  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Text>{count}</Text>
      </View>
    </View>
  );
};
