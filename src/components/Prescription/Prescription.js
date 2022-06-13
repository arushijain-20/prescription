import React from "react";

import "./Prescription.css";

const Prescription = ({ data }) => {
  return (
    <div className="prescription">
      <h1>
        Dr. John Killer <span>MBBS,MS(Ortho)</span>
      </h1>
      <p className="address">
        751 Victoria 123 Street,South Statue 204
        <br />
        Hometown,US 1234
        <br />
        PH: (207)808 2014 2014
        <br />
        FAX:(207)808 2015 2202
      </p>
      <hr />
      <div className="content">
        <div className="row1">
          <label>S.no: 1001</label>
        </div>
        <div className="row">
          <label>
            Patient's name: <input value={data.name}></input>
          </label>
          <label>
            Age: <input value={data.age}></input>
          </label>
          <label>
            Gender: <input value={data.gender}></input>
          </label>
        </div>
        <div className="row">
          <label>
            Address:{" "}
            <input className="address-row" value={data.address}></input>
          </label>
          <label>
            Date: <input value={data.date}></input>
          </label>
        </div>
      </div>

      <div className="rx">R<span>x</span></div>
      <div className="medPrescription">
        <p>{data.mednotes}</p>
        <h2>Details of Medicine</h2>
        <p>{data.medDetails}</p>
      </div>

      <div className="footer">
        Doctor's Signature: <input/><hr/>
        <p>www.hospitalmail@gmail.com</p>
      </div>
      
    </div>
  );
};

export default Prescription;
