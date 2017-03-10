import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import solarSystemReducer from './solar-system/reducer';
import solarSystemEpic from './solar-system/epic';

const epicMiddleware = createEpicMiddleware(solarSystemEpic);

export default () =>
  createStore(
    solarSystemReducer,
    applyMiddleware(epicMiddleware),
  );
