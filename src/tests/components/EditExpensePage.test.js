import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixture/expenses";

let editExpense, removeExpense, wrapper, history;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage 
      editExpense={editExpense} 
      removeExpense={removeExpense} 
      history={history} 
      expense={expenses[1]}
    />
  );
});

test("should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot(); 
});

test("should handle editExpense", () => {
  const editedExpense = {description: "Rent tested"};
  wrapper.find("ExpenseForm").prop("onSubmit")(editedExpense);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, editedExpense);
  expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should handle removeExpense", () => {
  wrapper.find("button").simulate("click");
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
  expect(history.push).toHaveBeenLastCalledWith("/");
});