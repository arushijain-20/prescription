import React from "react";
import { Link} from "react-router-dom";
import "./Form.css";

const Form = ({inputs,setInputs}) => {
  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          <div className="col-25">
            <label>Patient name :</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Patient age :</label>
          </div>
          <div className="col-75">
            <input
              type="number"
              name="age"
              value={inputs.age}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Patient Gender :</label>
          </div>
          <div className="col-75">
            <input
              id="male"
              type="checkbox"
              name="gender"
              value="Male"
              onClick={handleChange}
            />
            <label htmlFor="male">Male</label>
            <input
              id="female"
              type="checkbox"
              name="gender"
              value="Female"
              onClick={handleChange}
            />
            <label htmlFor="female">Female</label>
            <input
              id="other"
              type="checkbox"
              name="gender"
              value="Other"
              onClick={handleChange}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Patient Adrress :</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="address"
              value={inputs.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Date:</label>
          </div>
          <div className="col-75">
            <input
              type="date"
              name="date"
              value={inputs.date}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Medical Notes:</label>
          </div>
          <div className="col-75">
          <textarea
            type="textarea"
            name="mednotes"
            value={inputs.mednotes}
            onChange={handleChange}
          />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
          <label>Details of Medicine:</label> </div>
        
        <div className="col-75">
          <textarea
            type="textarea"
            name="medDetails"
            value={inputs.medDetails}
            onChange={handleChange}
          />
        </div></div>

        <div className="row">
        <Link to="/prescription"
        >
          <input type="submit" /></Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
