import React from 'react';
import { Text } from 'react-native';

import { Container } from '../../ui/';
import { IRecipe } from '../../store/recipes/interfaces';

type Props = {
  items: IRecipe[];
};

export const Recipes = ({ items }: Props) => {
  return (
    <Container>
      {items.map((i, index) => (
        <Text key={index}>{i.title}</Text>
      ))}
    </Container>
  );
};
