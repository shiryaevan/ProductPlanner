import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { Home } from './Home';

type Props = {};

export const HomeContainer = ({}: Props) => {
  const navigation = useNavigation();

  const handleOnPressAddList = () => navigation.navigate('Recipes');

  return <Home onPressAddList={handleOnPressAddList} />;
};
