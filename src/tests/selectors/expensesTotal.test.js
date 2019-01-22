import expenses from "../fixture/expenses";
import getTotalExpenses from "../../selectors/expensesTotal";

test("should render 0 if no expense", () => {
  const total = getTotalExpenses([]);
  expect(total).toBe(0);
});

test("should add up correctly a single expense", () => {
  const total = getTotalExpenses([expenses[2]]);
  expect(total).toBe(expenses[2].amount);
});

test("should add up correctly multiple expenses", () => {
  const total = getTotalExpenses(expenses);
  expect(total).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});