import React from 'react';
import { Form } from 'react-final-form';

import { Button, Container } from '../../ui';
import { Field } from '../../components';

type PropsSaveList = {
  onSaveListPress: (listName: string) => void;
};

type FormValues = {
  listName: string;
};

export const SaveList = ({ onSaveListPress }: PropsSaveList) => {
  const onSubmitHandler = (values: FormValues) => {
    onSaveListPress(values.listName);
  };

  return (
    <Container>
      <Form
        onSubmit={onSubmitHandler}
        render={({ handleSubmit }) => (
          <>
            <Field
              name="listName"
              inputProps={{
                label: 'Название списка',
              }}
            />
            <Button onPress={handleSubmit}>Сохранить список</Button>
          </>
        )}
      />
    </Container>
  );
};
