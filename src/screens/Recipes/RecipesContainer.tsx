import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { Recipes } from '../../screens/';
import { getRecipes } from '../../store/recipes/actions';
import { storeType } from '../../store';

type Props = {
  getRecipes: () => void;
} & ReturnType<typeof mapStateToProps>;

class RecipesContainerPure extends Component<Props> {
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    const { recipes, isLoading } = this.props;

    return isLoading ? <Text>Loading</Text> : <Recipes items={recipes} />;
  }
}

const mapStateToProps = (state: storeType) => {
  return {
    isLoading: state.recipes.isLoading,
    recipes: state.recipes.recipes,
  };
};

const mapDispatchToProps = {
  getRecipes,
};

export const RecipesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipesContainerPure);
