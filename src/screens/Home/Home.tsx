import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button, Container } from '../../ui/';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Recipes')}>Добавить список</Button>
    </Container>
  );
};
