import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import SolarSystem from './solar-system/component';
import createStore from './create-store';
import { planetShape } from './planet/component';
import { initializePlanets } from './solar-system/actions';

const fullPlanetShape = {
  ...planetShape,
  id: PropTypes.string.isRequired,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.store = createStore();
    this.store.dispatch(
      initializePlanets(props.planets),
    );
  }

  render() {
    return (
      <Provider store={this.store}>
        <SolarSystem planets={this.props.planets} />
      </Provider>
    );
  }
}

App.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.shape(fullPlanetShape)).isRequired,
};

export default App;
