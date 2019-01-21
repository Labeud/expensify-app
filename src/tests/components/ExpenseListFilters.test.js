import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixture/filters";

let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
    />
  );
});

test("should render ExpenseListFilter correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilter with alt data correctly", () => {
  wrapper.setProps({filters: altFilters});
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "New text";
  wrapper.find("input").simulate("change", {
    target: {value}
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
  const value = "date";
  wrapper.setProps({filters: altFilters});
  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  const value = "amount";
  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
  const dates = {
    startDate : moment(0).add(4, "year"),
    endDate: moment(0).add(8, "year")
  };
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")(dates);
  expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate);
});

test("should handle date focus change", () => {
  const calendarFocused = "endDate";
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});