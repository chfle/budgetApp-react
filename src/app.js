'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/configStore';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


const store = configStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water bill', amount: 1000, createAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 1000, createAt: 1000 }));
store.dispatch(setTextFilter('water'));


ReactDOM.render(<AppRouter />, document.getElementById('app'));
