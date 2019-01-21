import expenseReducer from "../../reducers/expenses";
import expenses from "../fixture/expenses";

test("should set default state", () => {
  const state = expenseReducer(undefined, {type: "@@INIT"});
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = { 
    type: "REMOVE_EXPENSE", 
    id: expenses[1].id
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = { 
    type: "REMOVE_EXPENSE", 
    id: "-1"
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "heyheyhey",
    description: "Added Expense",
    amount: 123456,
    note: "This is my note!",
    createdAt: 7876567656
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const description = "Updated text";
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates : {
      description
    }
  };
  const state = expenseReducer(expenses, action);
  expect(state[1].description).toBe(description)
});

test("should not edit expense if expense not found", () => {
  const description = "Updated text";
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates : {
      description
    }
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);  
});