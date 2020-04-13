import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { SaveList } from './SaveList';

const noop = () => {};

storiesOf('Screens', module).add('SaveList', () => <SaveList onSaveListPress={noop} />);
