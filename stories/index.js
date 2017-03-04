import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Example from './example';

storiesOf('Example')
  .add('to Storybook', () => (
    <Example />
  ));
