import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Button } from './Button';

storiesOf('ui', module).add('Button', () => <Button>Button Text</Button>);
