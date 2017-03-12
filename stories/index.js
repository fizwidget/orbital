import React from 'react';
import { storiesOf } from '@kadira/storybook';
import App from '../src/app';
import { createGrid } from './scenario-generator';

storiesOf('Solar system')
  .add('with grid of planets', () => (
    <App planets={createGrid()} />
  ));
