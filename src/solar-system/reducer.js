import { INITIALIZE_PLANETS, CLOCK_TICK } from './actions';
import applyGravity from './gravity';

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INITIALIZE_PLANETS:
      return payload;
    case CLOCK_TICK:
      return applyGravity(state);
    default:
      return state;
  }
};
