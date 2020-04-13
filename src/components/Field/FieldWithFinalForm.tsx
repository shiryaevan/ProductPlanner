import React from 'react';

import { Field as FFField, FieldProps, FieldRenderProps } from 'react-final-form';
import { Field as DefaultField, PropsField as DefaultPropsField } from './Field';

export type PropsField = {
  inputProps?: DefaultPropsField;
} & FieldProps<string, FieldRenderProps<string, HTMLInputElement>>;

export const Field = ({ name, inputProps }: PropsField) => {
  return (
    <FFField name={name}>
      {({ input }) => <DefaultField value={input.value} onChange={input.onChange} {...inputProps} />}
    </FFField>
  );
};
