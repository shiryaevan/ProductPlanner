import React, { Component } from 'react';

import { Home } from './Home';
import { useNavigation } from '@react-navigation/core';

type Props = {};

export class HomeContainer extends Component<Props> {
  private navigation = useNavigation();

  handleOnPressAddList = () => this.navigation.navigate('Recipes');

  render() {
    return <Home onPressAddList={this.handleOnPressAddList} />;
  }
}
