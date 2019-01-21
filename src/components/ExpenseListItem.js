import React from "react";
import { Link } from "react-router-dom"

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{(amount / 100).toFixed(2)}€ - {createdAt}</p>
  </div>
);

// No need to access the state, we just want dispatch
export default ExpenseListItem;