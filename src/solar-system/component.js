import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Planet, { planetShape } from '../planet/component';
import { planetsSelector } from './selectors';

export const SolarSystem = ({ planets }) => (
  <div>
    {planets.map(({ id, x, y, radius }) =>
      <Planet key={id} x={x} y={y} radius={radius} />,
    )}
  </div>
);

SolarSystem.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.shape(planetShape)).isRequired,
};

export default connect(
  state => ({
    planets: planetsSelector(state),
  }),
)(SolarSystem);
