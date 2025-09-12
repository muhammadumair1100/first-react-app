import { useState } from "react";

export default function Todo() {
  let [newTask, setNewTask] = useState("");
  let [todos, setTodo] = useState([]);

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function addBtn() {
    setTodo((todos) => {
      return [...todos, newTask];
    });
    setNewTask("");
  }

  console.log(newTask);
  console.log(todos);

  return (
    <>
      <input
        value={newTask}
        onChange={handleChange}
        type="text"
        placeholder="write something..."
      />
      <br />
      <br />
      <button onClick={addBtn}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
