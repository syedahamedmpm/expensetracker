import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const ListExpenses = () => {
  const [expensesList, setExpensesList] = useState([]);
  const [totalSum, setTotalSum] = useState();

  useEffect(() => {
    getExpenses();
    const total = expensesList.reduce((acc, row) => acc + parseInt(row.amount), 0);
    setTotalSum(total);
  }, [expensesList]);
  const getExpenses = () => {
    let url = "http://localhost:3008/getexpenses";
    axios
      .get(url)
      .then(function (response) {
        console.log(response);
        console.log(response.data.results);
        setExpensesList(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const TableHeaders = ["No", "Amount", "Category", "Date"];
  return (
    <>
      <table className="table table-sm table-dark">
        <thead>
          <tr>
            {TableHeaders.map((head, index) => (
              <th key={index + 1}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expensesList.map((expense, index) => (
            <tr key={index + 1}>
              <td>{expense.id}</td>
              <td>{parseInt(expense.amount)}</td>
              <td>{expense.category}</td>
              <td>{moment(expense.date).format("DD-MM-YYYY dddd")}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{totalSum}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default ListExpenses;
