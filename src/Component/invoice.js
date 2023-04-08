import React from "react";
import { getInvoice, deleteInvoice } from "../Component/data";
import { useParams, useNavigate } from "react-router-dom";
function Invoice() {
  let params = useParams();
  let navigate = useNavigate();
  let invoice = getInvoice(parseInt(params.invoicId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total due:{invoice.amount}</h2>
      <p>
        {invoice.name} : {invoice.number}
      </p>
      <p>Due Date :{invoice.due}</p>
      <button
        onClick={() => {
          deleteInvoice(invoice.number);
          navigate("/invoices");
        }}
      >
        Delete
      </button>
    </main>
  );
}

export default Invoice;
