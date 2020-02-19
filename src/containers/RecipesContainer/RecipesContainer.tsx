import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Recipes } from '../../screens/';
import { recipes as resipesAction } from '../../store/recipes/actions';
import { Text } from 'react-native';

class RecipesContainerPure extends Component {
  componentDidMount() {
    this.props.resipesAction();
  }

  render() {
    const { recipes } = this.props;
    console.log(recipes);

    return recipes ? <Recipes items={recipes} /> : <Text>Loading</Text>;
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
  };
};

const mapDispatchToProps = {
  resipesAction,
};

export const RecipesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipesContainerPure);
