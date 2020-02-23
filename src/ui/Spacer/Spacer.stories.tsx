import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { Spacer } from './Spacer';
import { Aligner } from '../Aligner';
import { Text } from '../Text';
import { View } from 'react-native';

const margin = ['none', 'default', 'xxs', 'xs', 'sm', 'lg', 'xlg'];

const stories = storiesOf('ui/Spacer', module);

stories.addDecorator(withKnobs);
stories
  .add('Spacer Bottom', () => (
    <>
      <Spacer margin={select('margin', margin, 'default', '1')}>
        <Text>Margin Bottom</Text>
      </Spacer>
      <Text>Just Text</Text>
    </>
  ))
  .add('Spacer Right', () => (
    <View>
      <Aligner>
        <Spacer margin="none" marginRight={select('marginRight', margin, 'default')}>
          <Text>Margin Right</Text>
        </Spacer>
        <Text>Just Text</Text>
      </Aligner>
    </View>
  ))
  .add('Both', () => (
    <>
      <Aligner valign="top">
        <Spacer margin={select('margin', margin, 'default')} marginRight={select('marginRight', margin, 'default')}>
          <Text>Margin</Text>
        </Spacer>
        <Text>Just Text</Text>
      </Aligner>
      <Text>Still Just Text</Text>
    </>
  ));
