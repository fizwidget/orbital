import { CLOCK_TICK } from './actions';
import applyGravity from './gravity';

const initialState = [
  {
    id: '1',
    x: 140,
    y: 60,
    dx: -1,
    dy: 0,
    radius: 20,
  },
  {
    id: '2',
    x: 260,
    y: 160,
    dx: 1,
    dy: 0,
    radius: 20,
  },
];

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case CLOCK_TICK:
      return applyGravity(state);
    default:
      return state;
  }
};
