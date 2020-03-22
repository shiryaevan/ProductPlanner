import React from 'react';

import { Button, Container } from '../../ui/';
import { IRecipe } from '../../store/recipes/interfaces';
import { RecipeItem, PropsRecipeItem } from '../../components/RecipeItem';

type Props = {
  items: IRecipe[];
} & Pick<PropsRecipeItem, 'onItemPress'>;

export const Recipes = ({ items, onItemPress }: Props) => {
  return (
    <>
      <Container paddingHorizontal={0}>
        {items.map((i, index) => (
          <RecipeItem key={index} itemData={i} onItemPress={onItemPress} />
        ))}
      </Container>
      <Button>Сохранить список</Button>
    </>
  );
};
