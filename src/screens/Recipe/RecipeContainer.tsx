import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';

import { Recipe } from './Recipe';
import { RootStackParamList } from '../../../App';

type Props = {};

export const RecipeContainer = ({}: Props) => {
  const router = useRoute<RouteProp<RootStackParamList, 'Recipe'>>();

  return <Recipe {...router.params} />;
};
