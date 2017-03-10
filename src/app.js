import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SolarSystem from './solar-system/component';
import createStore from './create-store';

export default class App extends Component {
  constructor() {
    super();
    this.store = createStore();
  }

  render() {
    return (
      <Provider store={this.store}>
        <SolarSystem />
      </Provider>
    );
  }
}
