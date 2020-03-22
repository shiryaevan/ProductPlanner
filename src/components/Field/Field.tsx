import React from 'react';

import { Text, TextInput, Spacer, PropsTextInput } from '../../ui';

type Props = {
  label?: string;
} & PropsTextInput;

export const Field = ({ label, ...rest }: Props) => {
  return (
    <>
      {label && <Text>{label}</Text>}
      <TextInput {...rest} />
      <Spacer />
    </>
  );
};
