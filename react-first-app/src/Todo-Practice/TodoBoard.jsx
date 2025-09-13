import { useState } from "react";

export default function TodoBoard() {
  let random = Math.floor(Math.random() * 10000) + 1;

  let [newTodo, setTodo] = useState("");
  let [newTask, setTask] = useState([{ todo: "Eat", id: random }]);

  let addNewTodo = (e) => {
    setTodo(e.target.value);
  };

  let addNewTask = () => {
    setTask((preTask) => {
      return [...preTask, { todo: newTodo, id: random }];
    });
    setTodo("");
  };

  let deleteTask = (id) => {
    setTask(newTask.filter((Task) => Task.id !== id));
  };

  return (
    <div
      style={{
        border: "2px solid white",
        padding: "30px",
        borderRadius: "15px",
      }}
    >
      <input
        type="text"
        placeholder="Add new todo"
        onChange={addNewTodo}
        value={newTodo}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add</button>
      <br />
      <br />
      <hr />
      <ul>
        {newTask.map((Task) => {
          console.log(Task.id);
          return (
            <li key={Task.id}>
              <span>{Task.todo}</span>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => deleteTask(Task.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
