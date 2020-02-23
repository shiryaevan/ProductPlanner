import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Recipes } from './Recipes';
import mock from './__MOCK__';

storiesOf('Screens', module).add('Recipes', () => <Recipes items={mock} />);
