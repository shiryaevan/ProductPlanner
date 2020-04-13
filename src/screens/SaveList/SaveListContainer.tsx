import React from 'react';
import { connect } from 'react-redux';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { SaveList } from './SaveList';
import { RootStackParamList } from '../../App';
import { setSavedRecipesLists } from '../../store/savedRecipesLists';

type PropsSaveListContainer = {} & typeof mapDispatchToProps;

export const SaveListContainerPure = ({ setSavedRecipesLists }: PropsSaveListContainer) => {
  const router = useRoute<RouteProp<RootStackParamList, 'SaveList'>>();
  const navigation = useNavigation();

  const onSaveListPressHandler = (listName: string) => {
    setSavedRecipesLists({ [listName]: router.params.selectedRecipesIds });
    navigation.navigate('Home');
  };

  return <SaveList onSaveListPress={onSaveListPressHandler} />;
};

const mapDispatchToProps = {
  setSavedRecipesLists,
};

export const SaveListContainer = connect(null, mapDispatchToProps)(SaveListContainerPure);
