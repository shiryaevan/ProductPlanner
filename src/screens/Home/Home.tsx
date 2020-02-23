import React from 'react';

import { Button, Container } from '../../ui/';

type Props = {
  onPressAddList?: () => void;
};

export const Home = ({ onPressAddList = () => {} }: Props) => {
  return (
    <Container>
      <Button onPress={onPressAddList}>Добавить список</Button>
    </Container>
  );
};
