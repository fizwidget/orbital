export const INITIALIZE_PLANETS = 'INITIALIZE_PLANETS';
export const CLOCK_TICK = 'CLOCK_TICK';

export const initializePlanets = planets => ({
  type: INITIALIZE_PLANETS,
  payload: planets,
});

export const clockTick = () => ({
  type: CLOCK_TICK,
});
