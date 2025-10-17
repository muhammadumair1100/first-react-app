import { useEffect, useState } from "react";
import Joker from "./Joker";
import "./WeatherApp.css";

export default function Form() {
  const [inputs, setInputs] = useState({
    search: "",
    number: "",
    password: "",
  });
  const getInputsData = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setInputs((input) => {
      return { ...input, [fieldName]: fieldValue };
    });
    console.log(inputs);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setInputs({ search: "", number: "", password: "" });
    console.log(inputs);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="searchName">Search Name</label>
          <input
            type="text"
            placeholder="search Name"
            name="search"
            id="searchName"
            value={inputs.search}
            onChange={getInputsData}
          />
        </div>
        <br />
        <div>
          <label htmlFor="enterNum">Enter Phone Number</label>
          <input
            type="number"
            placeholder="enter phone number"
            name="number"
            id="enterNum"
            value={inputs.number}
            onChange={getInputsData}
          />
        </div>
        <br />
        <div>
          <label htmlFor="enterPass">Enter Password</label>
          <input
            type="password"
            placeholder="enter phone number"
            name="password"
            id="enterPass"
            value={inputs.password}
            onChange={getInputsData}
          />
        </div>
        <button>Submit</button>
      </form>
      <Joker />
    </>
  );
}
