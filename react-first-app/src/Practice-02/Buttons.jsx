import { useState } from "react";

export default function Buttons() {
  let colors = {
    blue: 0,
    yellow: 0,
    green: 0,
    red: 0,
  };

  let [color, setColor] = useState(colors);

  function blueColor() {
    setColor({ ...color, blue: color.blue + 1 });
  }

  function yellowColor() {
    setColor((color) => ({ ...color, yellow: color.yellow + 1 }));
  }

  function greenColor() {
    setColor({ ...color, green: color.green + 1 });
  }

  function redColor() {
    setColor((color) => ({ ...color, red: color.red + 1 }));
  }

  return (
    <>
      <div>
        <p>Blue moves : {color.blue} </p>
        <button style={{ background: "blue" }} onClick={blueColor}>
          +1
        </button>
      </div>
      <div>
        <p>Yellow moves : {color.yellow}</p>
        <button
          style={{ background: "yellow", color: "black" }}
          onClick={yellowColor}
        >
          +1
        </button>
      </div>
      <div>
        <p>Green moves : {color.green}</p>
        <button style={{ background: "green" }} onClick={greenColor}>
          +1
        </button>
      </div>
      <div>
        <p>Red moves : {color.red}</p>
        <button style={{ background: "red" }} onClick={redColor}>
          +1
        </button>
      </div>
    </>
  );
}
