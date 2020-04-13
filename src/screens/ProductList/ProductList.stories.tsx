import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { ProductList } from './ProductList';
import mock from '../../__MOCK__';

storiesOf('Screens', module).add('ProductList', () => <ProductList recipes={mock} />);
