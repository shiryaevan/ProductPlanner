import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Recipes } from '../../screens/';
import { recipes } from '../../store/recipes/actions';

class RecipesContainerPure extends Component {
  componentDidMount() {
    this.props.recipes();
  }

  render() {
    return <Recipes />;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  recipes,
};

export const RecipesContainer = connect(mapStateToProps, mapDispatchToProps)(RecipesContainerPure);
