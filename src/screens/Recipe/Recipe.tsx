import React from 'react';
import { Image } from 'react-native';

import { Container, Spacer, Text } from '../../ui/';
import { IRecipe } from '../../store/recipes/interfaces';
import { Ingredient } from './Ingredient';

export type PropsRecipe = {} & IRecipe;

export const Recipe = ({ title, image, ingredients }: PropsRecipe) => {
  return (
    <Container>
      <Image source={{ uri: image }} style={{ height: 200 }} />
      <Spacer />
      <Text>{title}</Text>
      <Spacer />
      {ingredients && ingredients.map((i, index) => (
        <Ingredient key={index} {...i} />
      ))}
    </Container>
  );
};
