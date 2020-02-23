import React from 'react';
import { Image } from 'react-native';

import { Container, Spacer, Text } from '../../ui/';
import { IRecipe } from '../../store/recipes/interfaces';
import { Ingredient } from './Ingredient';

type Props = {} & IRecipe;

export const Recipe = ({ id, title, image, ingredients }: Props) => {
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
