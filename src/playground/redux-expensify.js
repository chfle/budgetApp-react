'use strict';

import { createStore, combineReducers } from 'redux';

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 1000, createAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 4000, createAt: -5000 }));
//
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5000 }));
//
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
//
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(123));
// store.dispatch(setStartDate());
//
// store.dispatch(setEndDate(1500));
// store.dispatch(setEndDate());

const demoState = {
  expenses: [{
    id: 'fsdffergerg',
    description: 'rent',
    note: 'This is my note',
    amount: '54500',
    createAt: 0,
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startData: undefined,
    endDate: undefined,
  },
};
