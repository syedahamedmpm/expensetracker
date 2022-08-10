import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const AddExpenses = () => {
  const [state, setState] = useState({
    amount: 0,
    category: "",
    paymentmethod:'Cash',
    date: new Date(),
  });
  console.log(state);
  const [addbuttonShow, setAddButtonShow] = useState(false);
  const { amount, category, date } = state;
 useEffect(()=>{
  if (amount.length>0 && category.length>0 && date.length>0) {
    setAddButtonShow(true)
  }
 },[ amount, category, date])
  const handleOnchange = (e) => {
    console.log(e.target.type);
    setState({
      ...state,
      [e.target.name]: e.target.value,
      // [e.target.name]: e.target.type === "number" ? parseInt(e.target.value) : e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let url = "http://localhost:3008/addmyexpenses";
    axios
      .post(url, state)
      .then(function (response) {
        console.log("respone", response);
      })
      .catch(function (error) {
        console.log("Error", error);
      });
    setState({
      amount: 0,
      category: "",
      date: "",
    });
    setAddButtonShow(false)
  };
  console.log(state);

  return (
    <div style={{position:'absolute',top:'100px',left:'300px',width:'82%'}}>
      <div
        className="card"
      >
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Amount</label>
              <input
                type="number"
                className="form-control"
                placeholder="Amount"
                name="amount"
                value={state.amount}
                onChange={handleOnchange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="category"
                value={state.category}
                onChange={handleOnchange}
              >
                <option value="selectoption">Open this select menu</option>
                <option value="food">Food</option>
                <option value="dress">Dress</option>
                <option value="outing">Outing</option>
                <option value="rent">Rent</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="paymentmethod"
                value={state.paymentmethod}
                onChange={handleOnchange}
              >
                
                <option value="Cash">Cash</option>
                <option value="Account">Account</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Date"
                name="date"
                value={state.date}
                onChange={handleOnchange}
              />
            </div>
            {addbuttonShow ? <button className="btn btn-primary w-100">Add</button> : <button disabled className="btn btn-primary w-100">Add</button>}
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddExpenses;
