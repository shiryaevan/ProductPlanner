import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { RecipeItem } from './RecipeItem';
import mockData from './__MOCK__';

storiesOf('components', module).add('RecipeItem', () => <RecipeItem itemData={mockData} />);
