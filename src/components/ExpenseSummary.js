import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import addTotalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';

const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}</h1>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: addTotalExpenses(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);