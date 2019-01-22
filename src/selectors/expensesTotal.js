export default (expenses) => {
  if (expenses === []) {
    return 0;
  } else {
    const amounts = expenses.map((expense) => expense.amount);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return amounts.reduce(reducer, 0);
  }
};