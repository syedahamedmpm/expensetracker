import React, { useState,useContext  } from "react";
import AmountContext from './Context/AmountContext'
const SavingAmount = () => {
    const sumofamount = useContext(AmountContext);
    console.log("some of ",sumofamount);
    const [amount,setAmount] = useState(10000)
  return (
    <div
      style={{
        position: "absolute",
        top: "100px",
        left: "300px",
        width: "82%",
      }}
    >
      <div className="card">
        <div className="card-body">
        <div className="mb-3">
              <label className="form-label">Total Amount :</label>
              <label className="form-label">{amount}</label>
            </div>
            <div className="mb-3">
              <label className="form-label">Debited Amount :</label>
              <label className="form-label">{sumofamount.totalSum}</label>
            </div>
            <div className="mb-3">
              <label className="form-label">Remaining Amount :</label>
              <label className="form-label">{amount-sumofamount.totalSum}</label>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SavingAmount;
