import { useState } from "react";

export default function Form() {
  let [count, setCount] = useState(0);
  let [isLiked, setLiked] = useState(false);

  console.log(`outside re-render : ${count}`); // how re-render works

  function handleSingalClick(event) {
    event.preventDefault();
    console.log("Hello World!");
  }

  function incCounter() {
    setCount((currValue) => currValue + 1);
    console.log(`inside re-render : ${count}`);
  }

  function isLike() {
    setLiked(!isLiked);
  }

  return (
    <>
      <form>
        <button onClick={handleSingalClick}>
          Singal Click To Console Something!
        </button>
      </form>

      <button onClick={incCounter}>Click To Increase Count : {count}</button>

      <h2>Click On Heart To Like And DisLike</h2>

      <p onClick={isLike} style={{ fontSize: "30px" }}>
        {isLiked ? (
          <i style={{ color: "red" }} className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </>
  );
}
