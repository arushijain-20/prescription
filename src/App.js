import { useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Form from "./components/Form/Form";
import Prescription from "./components/Prescription/Prescription";

function App() {
  const [inputs, setInputs] = useState([
    {
      name: "",
      age: "",
      gender: "",
      date: "",
      address:"",
      mednotes: "",
      medDetails: "",
    },
  ]);
  return (
    <div className="App">
      <h1 className="heading">Gaga Health</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Form inputs={inputs} setInputs={setInputs} />}
          />
          <Route
            path="/prescription"
            element={<Prescription data={inputs} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
