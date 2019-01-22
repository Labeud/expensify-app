import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import 'numeral/locales/fr';

numeral.locale("fr");

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format("0,0.00$")}
      - 
      {moment(createdAt).format("DD/MM/YYYY")}
    </p>
  </div>
);

// No need to access the state, we just want dispatch
export default ExpenseListItem;