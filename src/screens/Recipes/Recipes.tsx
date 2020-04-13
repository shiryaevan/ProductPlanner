import React from 'react';

import { Button, Container } from '../../ui/';
import { IRecipe } from '../../store/recipes';
import { RecipeItem, PropsRecipeItem } from '../../components/RecipeItem';
import { Field, Form } from 'react-final-form';

type Props = {
  items: { [key: number]: IRecipe };
  onSaveListPress: (values: string[]) => void;
} & Pick<PropsRecipeItem, 'onItemPress' | 'onCheckboxChange'>;

export const Recipes = ({ items, onItemPress, onSaveListPress = () => {} }: Props) => {
  return (
    <Form
      onSubmit={onSaveListPress}
      render={({ handleSubmit }) => (
        <Container paddingHorizontal={0}>
          {Object.values(items).map((i, index) => (
            // final form can't pass number as name
            <Field key={index} name={`_${i.id}`}>
              {({ input }) => (
                <RecipeItem
                  itemData={i}
                  onItemPress={onItemPress}
                  checkboxChecked={!!input.value}
                  onCheckboxChange={input.onChange}
                />
              )}
            </Field>
          ))}
          <Button onPress={handleSubmit}>Сохранить список</Button>
        </Container>
      )}
    />
  );
};
