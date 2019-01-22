import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render correctly ExpensesSummary with 1 expense", () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={2000} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render correctly ExpensesSummary multiple expenses", () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={1000} />);
  expect(wrapper).toMatchSnapshot();
});