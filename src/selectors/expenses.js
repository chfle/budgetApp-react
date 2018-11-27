'use strict';

// Get visible expenses
const getVisibleExpenses = (expenses, {
  text, sortBy, startData, endDate,
}) => expenses.filter((expense) => {
  const startDateMatch = typeof startData !== 'number' || expense.createAt >= startData;
  const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
  const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

  return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
  if (sortBy === 'date') {
    return a.createAt < b.createAt ? 1 : -1;
  } if (sortBy === 'amount') {
    return a.amount < b.amount ? 1 : -1;
  }
});


export default getVisibleExpenses;
