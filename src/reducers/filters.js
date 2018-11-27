'use strict';

// Filter Reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startData: undefined,
  endDate: undefined,
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        ...action,
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: '"date"',
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startData: action.startData,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endData,
      };
    default:
      return state;
  }
};

export default filterReducer;
