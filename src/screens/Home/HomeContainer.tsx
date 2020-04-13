import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import { connect } from 'react-redux';

import { Home } from './Home';
import { IStore } from '../../store';
import { ISavedRecipesList } from '../../store/savedRecipesLists';

type Props = {
  savedLists: ISavedRecipesList;
};

export const HomeContainerPure = ({ savedLists }: Props) => {
  const navigation = useNavigation();

  const handleOnPressAddList = useCallback(() => navigation.navigate('Recipes'), [navigation]);
  const handleOnProductListPress = useCallback(id => navigation.navigate('ProductList', { savedListId: id }), [
    navigation,
  ]);

  return (
    <Home onPressAddList={handleOnPressAddList} onProductListPress={handleOnProductListPress} savedLists={savedLists} />
  );
};

const mapStateToProps = (state: IStore) => {
  return { savedLists: state.savedRecipesLists };
};

export const HomeContainer = connect(mapStateToProps)(HomeContainerPure);
