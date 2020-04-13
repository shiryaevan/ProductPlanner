import React from 'react';
import { View } from 'react-native';

import { Container, Text, Aligner } from '../../ui/';
import { IRecipe } from '../../store/recipes';

type PropsProductList = {
  recipes: IRecipe[];
};

const prepareProductList = (recipes: IRecipe[]) => {
  const arr: { [key: string]: { value: string | number; unit?: string } } = {};

  recipes.forEach(i => {
    i.ingredients &&
      i.ingredients.forEach(ingridient => {
        const reducedIngridient = arr[ingridient.title];
        arr[ingridient.title] = {
          value:
            reducedIngridient &&
            typeof reducedIngridient.value === 'number' &&
            typeof ingridient.value === 'number' &&
            ingridient.unit === reducedIngridient.unit
              ? ingridient.value + reducedIngridient.value
              : ingridient.value,
          unit: ingridient.unit,
        };
      });
  });

  return arr;
};

export const ProductList = ({ recipes }: PropsProductList) => {
  const productList = prepareProductList(recipes);
  return (
    <Container>
      <View>
        {Object.entries(productList).map(([key, value], index) => (
          <View key={index}>
            <Aligner>
              <Text>{key}</Text>
              <Aligner.Right>
                <Text>{`${value.value}${value.unit ? value.unit : ''}`}</Text>
              </Aligner.Right>
            </Aligner>
          </View>
        ))}
      </View>
    </Container>
  );
};
