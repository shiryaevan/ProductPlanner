import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Text } from './Text';

storiesOf('ui', module).add('Text', () => <Text>Some Text</Text>);
