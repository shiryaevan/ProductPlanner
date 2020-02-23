// tslint:disable:jsx-use-translation-function
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { select, withKnobs } from '@storybook/addon-knobs';

import { Aligner } from '.';
import { Spacer } from '../Spacer';
import { Text } from '../Text';

const stories = storiesOf('ui/Aligner', module);

const valing = ['center', 'top', 'bottom', 'baseline'];

stories.addDecorator(withKnobs);
stories
  .add('Two columns', () => (
    // @ts-ignore
    <Aligner valign={select('valing', valing, 'center')}>
      <Aligner.Left>
        <Text>{`Left \n Content`}</Text>
      </Aligner.Left>
      <Aligner.Right>
        <Text>Right Content</Text>
      </Aligner.Right>
    </Aligner>
  ))
  .add('Other', () => (
    // @ts-ignore
    <Aligner valign={select('valing', valing, 'top')}>
      <Spacer marginRight="default">
        <Text>{`Texty \n text`}</Text>
      </Spacer>
      <Text>Example with alignment of other elements</Text>
    </Aligner>
  ))
  .add('Centering Element', () => (
    <Aligner>
      <Aligner.Center>
        <Text>Text On Center</Text>
      </Aligner.Center>
    </Aligner>
  ));
