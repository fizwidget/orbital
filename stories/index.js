import React from 'react';
import { storiesOf } from '@kadira/storybook';
import App from '../src/app';

storiesOf('Solar system')
  .add('with sample data', () => (
    <App />
  ));
