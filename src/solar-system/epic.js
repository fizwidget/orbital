import { Observable } from 'rxjs';
import { clockTick } from './actions';

const framesPerSecond = 20;
const frameRateInterval = 1000 / framesPerSecond;

export default () =>
  Observable.interval(frameRateInterval)
    .map(clockTick);
