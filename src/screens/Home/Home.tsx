import React, { useCallback } from 'react';

import { Button, Container, Spacer, Text } from '../../ui/';
import { ISavedRecipesList } from '../../store/savedRecipesLists';
// import AsyncStorage from '@react-native-community/async-storage';

type Props = {
  onPressAddList?: () => void;
  savedLists?: ISavedRecipesList;
  onProductListPress?: (id: number) => void;
};

export const Home = ({ onPressAddList = () => {}, savedLists = {}, onProductListPress }: Props) => {
  const handleOnPressSavedList = useCallback(
    id => () => {
      onProductListPress && onProductListPress(id);
    },
    [onProductListPress],
  );

  return (
    <Container>
      {Object.keys(savedLists).length === 0 && <Text>Нет сохранненых списков</Text>}
      {Object.entries(savedLists).map(([key, value]) => (
        <Spacer key={key}>
          <Button onPress={handleOnPressSavedList(key)}>{value.toString()}</Button>
        </Spacer>
      ))}
      <Button onPress={onPressAddList}>Добавить список</Button>
      {/*<Button*/}
      {/*  onPress={async () => {*/}
      {/*    try {*/}
      {/*      await AsyncStorage.clear();*/}
      {/*    } catch (e) {*/}
      {/*      // clear error*/}
      {/*    }*/}
      {/*    console.log('Done.');*/}
      {/*  }}*/}
      {/*>*/}
      {/*  clear AS*/}
      {/*</Button>*/}
    </Container>
  );
};
