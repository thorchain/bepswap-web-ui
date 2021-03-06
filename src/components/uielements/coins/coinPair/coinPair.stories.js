import React from 'react';

import { storiesOf } from '@storybook/react';

import CoinPair from './coinPair';

storiesOf('Components/Coins/CoinPair', module).add('default', () => {
  return (
    <div style={{ display: 'flex' }}>
      <CoinPair from="rune" to="bnb" size="small" />
    </div>
  );
});
