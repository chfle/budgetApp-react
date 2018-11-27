'use strict';

import { createStore, combineReducers } from 'redux';


// Counter Functions

const addNumber = ({ num = 1 } = {}) => ({
  type: 'ADD_NUMBER',
  num,
});


// Counter Reducer

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return {
        counter: action.num,
      };
    default:
      return state;
  }
};

const wordReducer = (state = { word: '' }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const storePlay = createStore(
  combineReducers({
    counts: counterReducer,
    words: wordReducer,
  }),
);

storePlay.subscribe(() => {
  console.log(storePlay.getState());
});

storePlay.dispatch(addNumber({ num: 5 }));
