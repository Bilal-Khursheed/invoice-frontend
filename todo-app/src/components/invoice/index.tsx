import React, { useState, useEffect } from "react";
// invoiceFor: String, billTo: String, shipTo: String, date: String, paymentTerms: String, dueDate: String, pNumber: String, notes: String, terms: String, total: Number, amountPayed: Number, balanceDu: Number, tax: Number, userId: { type: Schema.Types.ObjectId, ref: 'userModel' }, itemId: [{ type: Schema.Types.ObjectId, ref: 'itemsModel' }]
const Invoice: any = () => {
    const [users, setusers]: any = useState([]);
    const [invoiceFor, setinvoiceFor] = useState('');
    const [billTo, setbillTo] = useState('');
    const [shipTo, setshipTo] = useState('');
    const [paymentTerms, setpaymentTerms] = useState('');
    const [dueDate, setdueDate] = useState('');
    const [date, setDate] = useState('');
    const [pNumber, setpNumber] = useState('');
    const [notes, setnotes] = useState('');
    const [total, settotal] = useState('');
    const [amountPayed, setamountPayed] = useState('');
    const [balanceDu, setbalanceDu] = useState('');
    const [terms, setterms] = useState('');
    const [tax, settax] = useState('');


  useEffect(() => {
    /* eslint-disable */
    fetchUsers();
    /* eslint-disable */
  }, []);
  const fetchUsers = async () => {
    let response: any = await fetch("http://localhost:3000/v1/users", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let usersList = await response.json();
    if (usersList) {
      console.log(JSON.stringify(usersList));
      setusers(usersList);
    }
  };
  console.log(users);
  return (
    <div className="card card-outline-secondary" style={{ margin: "4%" }}>
      <div className="card-header">
        <h3 className="mb-0">Invoice Working test task</h3>
      </div>
      <div className="card-body">
        <div className="row mt-4">
          <div className="col-sm-5 pb-3">
            <label>Invoice for #</label>
            <input
              className="form-control"
              id="exampleAccount"
              placeholder="Who is this invoice from? (required)"
                          type="text"
                          onChange = {(e)=>{setinvoiceFor(e.target.value)}}
            ></input>
          </div>
          <div className="col-sm-3 pb-3">
            <label>Bill TO #</label>
            <input
              className="form-control"
              id="exampleCtrl"
              placeholder="Who is this invoice to? (required)"
                          type="text"
                          onChange = {(e)=>{setbillTo(e.target.value)}}
            />
          </div>
          <div className="col-sm-4 pb-3">
            <label>Ship To</label>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input
                className="form-control"
                id="exampleAmount"
                placeholder="Optional"
                              type="number"
                              onChange = {(e)=>{setshipTo(e.target.value)}}
              />
            </div>
          </div>
          <div className="col-sm-6 pb-3">
            <label>Date</label>
            <input className="form-control" id="exampleFirst" type="datetime-local"  onChange = {(e)=>{setDate(e.target.value)}}/>
          </div>
          <div className="col-sm-6 pb-3">
            <label>Payment Terms</label>
            <input className="form-control" id="exampleLast" type="text" onChange = {(e)=>{setpaymentTerms(e.target.value)}}/>
          </div>
          <div className="col-sm-6 pb-3">
            <label>Due Date</label>{" "}
            <input className="form-control" id="exampleCity" type="datetime-local"  onChange = {(e)=>{setdueDate(e.target.value)}}/>
          </div>
          <div className="col-sm-3 pb-3">
            <label>users</label>{" "}
            <select className="form-control custom-select" id="exampleSt">
              <option className="text-white bg-warning">Pick a user</option>
              {users?.length > 0 &&
                users.map((item: any) => (
                  <>
                    {console.log("hello", item.name)}
                    <option  value={item._id}>{item.name}</option>
                  </>
                ))}
            </select>
          </div>
          <div className="col-sm-3 pb-3">
            <label>Ammount</label>
            <input className="form-control" id="exampleZip" type="number" onChange = {(e)=>{setpaymentTerms(e.target.value)}} />
          </div>

          <div className="col-md-6 pb-3">
            <label>Description</label>
            <textarea
              className="form-control"
              id="complexExampleMessage"
            ></textarea>
            <small className="text-muted">Add any notes here.</small>
          </div>
          <div className="col-md-6 pb-3">
            <label>notes</label>
            <textarea
              className="form-control"
              id="complexExampleMessage"
            ></textarea>
            <small className="text-muted">Add any notes here.</small>
          </div>
          <div className="col-md-6 pb-3">
            <label>Terms</label>
            <textarea
              className="form-control"
              id="complexExampleMessage"
            ></textarea>
            <small className="text-muted">Add any Terms here.</small>
          </div>
          <div className="col-sm-6 pb-3">
            <label>Tax</label>
            <input className="form-control" id="exampleLast" type="number" />
          </div>
          <div className="col-sm-6 pb-3">
            <label>Total</label>
            <input className="form-control" id="exampleLast" type="number" />
          </div>
          <div className="col-sm-6 pb-3">
            <label>Ammount Paid</label>
            <input className="form-control" id="exampleLast" type="number" />
          </div>
          <div className="col-sm-6 pb-3">
            <label>Balance due</label>
            <input className="form-control" id="exampleLast" type="number" />
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="float-right">
          <input
            className="btn btn-secondary"
            type="reset"
            value="Cancel"
          ></input>
          <input className="btn btn-primary" type="button" value="Send" />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
