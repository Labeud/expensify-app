import moment from "moment";

// Get visible expenses

export default (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;
      // debugger
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "amount") {
        return b.amount - a.amount;
      } else if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
    }
  );
}