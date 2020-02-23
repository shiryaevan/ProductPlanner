import React from 'react';

import { Container } from '../../ui/';
import { IRecipe } from '../../store/recipes/interfaces';
import { RecipeItem } from '../../components/RecipeItem';

type Props = {
  items: IRecipe[];
};

export const Recipes = ({ items }: Props) => {
  return (
    <Container paddingHorizontal={0}>
      {items.map((i, index) => (
        <RecipeItem key={index} itemData={i} />
      ))}
    </Container>
  );
};
