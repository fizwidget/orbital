import React, { PropTypes } from 'react';
import styled from 'styled-components';

const PositionedDiv = styled.div`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: ${props => props.radius * 2}px;
  height: ${props => props.radius * 2}px;
  border-radius: 1000px;
  background-color: ${props => props.color};
`;

export const planetShape = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

const Planet = ({ x, y, radius, color }) => (
  <PositionedDiv x={x} y={y} radius={radius} color={color} />
);

Planet.propTypes = planetShape;

export default Planet;
