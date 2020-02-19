import React from 'react';
import { Button, Container } from '../../ui/';
import { Text, View } from 'react-native';

export const Recipes = ({ items }) => {
  return (
    <Container>
      {items.map(i => (
        <Text>{i.title}</Text>
      ))}
    </Container>
  );
};
