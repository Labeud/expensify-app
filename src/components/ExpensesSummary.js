import React from "react";
import { connect } from "react-redux";
import getTotalExpensesAmount from "../selectors/expensesTotal";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";
import 'numeral/locales/fr';
numeral.locale("fr");

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount > 1 ? "expenses" : "expense";
  const formattedAmount = numeral(expensesTotal / 100).format("0,0.00$");
  return (
    <div>
      <h2>
        Viewing {expensesCount} {expenseWord} totalling {formattedAmount}.
      </h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesTotal: getTotalExpensesAmount(visibleExpenses),
    expensesCount: visibleExpenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);