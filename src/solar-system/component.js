import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Planet, { planetShape } from '../planet/component';
import { WIDTH, HEIGHT } from '../constants';
import { planetsSelector } from './selectors';

const Container = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  border-radius: 10px;
  border: 3px solid blue;
`;

export const SolarSystem = ({ planets }) => (
  <Container>
    {planets.map(({ id, x, y, radius, color }) =>
      <Planet key={id} x={x} y={y} radius={radius} color={color} />,
    )}
  </Container>
);

SolarSystem.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.shape(planetShape)).isRequired,
};

export default connect(
  state => ({
    planets: planetsSelector(state),
  }),
)(SolarSystem);
