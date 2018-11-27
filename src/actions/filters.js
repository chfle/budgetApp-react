'use strict';

// SET_TEXT Filter
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT',
  text,
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// SET_START_DATE
export const setStartDate = startData => ({
  type: 'SET_START_DATE',
  startData,
});

// SET_END_DATE
export const setEndDate = endData => ({
  type: 'SET_END_DATE',
  endData,
});
