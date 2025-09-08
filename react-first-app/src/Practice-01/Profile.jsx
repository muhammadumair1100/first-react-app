import { useState } from "react";

export default function Profile({ name, age, city, hobbies }) {
  let [moreDet, setDet] = useState(false);

  function toggleButton() {
    setDet(!moreDet);
    console.log("Hello");
  }
  const style = {
    backgroundColor: "#393E46",
    padding: "20px",
    borderRadius: "20px",
  };

  return (
    <div style={style}>
      <h1>Name : {name}</h1>
      <h2>Age : {age}</h2>
      <h3>City : {city}</h3>
      {moreDet && (
        <p>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </p>
      )}
      {moreDet ? (
        <button onClick={toggleButton}>Hide Detail</button>
      ) : (
        <button onClick={toggleButton}>Show Detail</button>
      )}
    </div>
  );
}
