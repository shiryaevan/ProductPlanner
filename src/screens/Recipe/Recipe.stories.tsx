import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Recipe } from './Recipe';
import mock from '../Recipes/__MOCK__';

storiesOf('Screens', module).add('Recipe', () => <Recipe {...mock[0]} />);
