import React from 'react';
import { Image } from 'react-native';

import { IRecipe } from '../../store/recipes/interfaces';
import { Aligner, Button, Checkbox, Spacer, Text } from '../../ui/';
import { styles } from './styles';

export type PropsRecipeItem = {
  itemData: IRecipe;
  onItemPress?: (recipeItem: IRecipe) => void;
};

export const RecipeItem = ({ itemData, onItemPress }: PropsRecipeItem) => {
  const onItemPressHandler = (recipeItem: IRecipe) => {
    onItemPress && onItemPress(recipeItem);
  };

  return (
    <Button type="unstyled" style={styles.recipeItem} onPress={() => onItemPressHandler(itemData)}>
      <Aligner>
        <Aligner>
          <Image style={{ width: 60, height: 60 }} source={{ uri: itemData.image }} />
          <Spacer marginRight="default" />
          <Text>{itemData.title}</Text>
        </Aligner>
        <Aligner.Right>
          <Checkbox />
        </Aligner.Right>
      </Aligner>
    </Button>
  );
};
