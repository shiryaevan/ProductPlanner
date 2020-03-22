import React from 'react';

import { Button, Container } from '../../ui';
import { Field } from '../../components';

type Props = {
  listName?: string;
  onListNameChange?: () => void;
  onSavePress?: () => void;
};

export const SaveList = ({ onSavePress, listName, onListNameChange }: Props) => {
  return (
    <Container>
      <Field label="Название списка" value={listName} onChangeText={onListNameChange} />
      <Button onPress={onSavePress}>Сохранить список</Button>
    </Container>
  );
};
