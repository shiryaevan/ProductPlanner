import React, { SyntheticEvent, useCallback } from 'react';
import { Image } from 'react-native';

import { IRecipe } from '../../store/recipes/interfaces';
import { Aligner, Button, Checkbox, Spacer, Text } from '../../ui/';
import { styles } from './styles';

export type PropsRecipeItem = {
  itemData: IRecipe;
  onItemPress?: (recipeId: number) => void;
  onCheckboxChange?: (e: SyntheticEvent) => void;
  checkboxChecked?: boolean;
};

export const RecipeItem = ({ itemData, onItemPress, checkboxChecked, onCheckboxChange }: PropsRecipeItem) => {
  const onItemPressHandler = useCallback(
    (recipeId: number) => () => {
      onItemPress && onItemPress(recipeId);
    },
    [onItemPress],
  );

  return (
    <Button type="unstyled" style={styles.recipeItem} onPress={onItemPressHandler(itemData.id)}>
      <Aligner>
        <Aligner>
          <Image style={{ width: 60, height: 60 }} source={{ uri: itemData.image }} />
          <Spacer marginRight="default" />
          <Text>{itemData.title}</Text>
        </Aligner>
        <Aligner.Right>
          <Checkbox checked={checkboxChecked} onChange={onCheckboxChange} />
        </Aligner.Right>
      </Aligner>
    </Button>
  );
};
