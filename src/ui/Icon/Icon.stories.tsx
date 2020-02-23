import React from 'react';
import { storiesOf } from '@storybook/react-native';

import * as Svg from './components';

import { Icon } from './Icon';
import { Spacer } from '../Spacer';
import { Text } from '../Text';

storiesOf('ui', module).add('Icon', () =>
  // @ts-ignore
  Object.entries(Svg).map(([key]: any) => (
    <Spacer key={key}>
      <Icon name={key} />
      <Text>{key}</Text>
    </Spacer>
  )),
);
