import { useState } from "react";

export default function Profile({ name, age, city, hobbies }) {
  let [moreDet, setDet] = useState(false);

  function toggleButton() {
    setDet(!moreDet);
  }

  if (moreDet) {
    return (
      <div
        style={{
          backgroundColor: "#393E46",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <h1>Name : {name}</h1>
        <h2>Age : {age}</h2>
        <h3>City : {city}</h3>
        <p>
          {hobbies.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </p>
        <button onClick={toggleButton}>Hide Detail</button>
      </div>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: "gray",
          padding: "10px",
          borderRadius: "20px",
        }}
      >
        <h1>Name : {name}</h1>
        <h2>Age : {age}</h2>
        <h3>City : {city}</h3>
        <button onClick={toggleButton}>Show Detail</button>
      </div>
    );
  }
}
