import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Field, Form } from 'react-final-form';

import { Checkbox } from './Checkbox';

storiesOf('ui/Checkbox', module)
  .add('default', () => <Checkbox />)
  .add('checked', () => <Checkbox checked />)
  .add('withForm', () => (
    <Form
      onSubmit={() => {}}
      render={() => (
        <>
          <Field name="cbx">
            {({ input: { value, onChange } }) => <Checkbox checked={!!value} onChange={onChange} />}
          </Field>
        </>
      )}
    />
  ));
