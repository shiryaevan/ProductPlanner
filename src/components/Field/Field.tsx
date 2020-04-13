import React from 'react';

import { Text, TextInput, Spacer, PropsTextInput } from '../../ui';

export type PropsField = {
  label?: string;
} & PropsTextInput;

export const Field = ({ label, ...rest }: PropsField) => {
  return (
    <>
      {label && <Text>{label}</Text>}
      <TextInput {...rest} />
      <Spacer />
    </>
  );
};
