import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Field } from './Field';

storiesOf('components', module).add('Field', () => <Field label="Label" />);
