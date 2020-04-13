import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Recipes } from './Recipes';
import mock from '../../__MOCK__';

const noop = () => {};

storiesOf('Screens', module).add('Recipes', () => <Recipes onItemPress={noop} onSaveListPress={noop} items={mock} />);
