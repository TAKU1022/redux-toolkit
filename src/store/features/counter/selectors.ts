import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../..';

const counterSelector = (state: RootState) => state.counter;

export const idSelector = createSelector(
  counterSelector,
  (counter) => counter.id
);

export const passionsSelector = createSelector(
  counterSelector,
  (counter) => counter.nest.demo.passions
);
