import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Random uniqueId generator

export default function TodoBoard() {
  let [newTodo, setTodo] = useState("");
  let [newTask, setTask] = useState([
    { todo: "Eat", id: uuidv4(), isDone: false },
  ]);

  let addNewTodo = (e) => {
    setTodo(e.target.value);
  };

  let addNewTask = () => {
    setTask((preTask) => {
      return [...preTask, { todo: newTodo, id: uuidv4(), isDone: false }];
    });
    setTodo("");
  };

  let deleteTask = (id) => {
    setTask(newTask.filter((Task) => Task.id !== id));
  };

  let upperCaseAll = () => {
    setTask((preTask) =>
      preTask.map((Task) => {
        return { ...Task, todo: Task.todo.toUpperCase(), isDone: false };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTask((preTasks) =>
      preTasks.map((Task) => {
        if (Task.id === id) {
          return {
            ...Task,
            todo: Task.todo.toUpperCase(),
          };
        } else {
          return Task;
        }
      })
    );
  };

  let isDoneOrNot = (id) => {
    setTask((prevTasks) =>
      prevTasks.map((Tasks) => {
        if (Tasks.id === id) {
          return {
            ...Tasks,
            isDone: !Tasks.isDone,
          };
        } else {
          return Tasks;
        }
      })
    );
  };

  let isDoneOrNotAll = () => {
    setTask((prevTasks) =>
      prevTasks.map((Task) => {
        return { ...Task, isDone: !Task.isDone };
      })
    );
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
          return (
            <li key={Task.id}>
              <span
                style={
                  Task.isDone
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {Task.todo}
              </span>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => deleteTask(Task.id)}>Delete</button>
              <button onClick={() => upperCaseOne(Task.id)}>UpperCase</button>
              {Task.isDone ? (
                <button onClick={() => isDoneOrNot(Task.id)}>UnDone</button>
              ) : (
                <button onClick={() => isDoneOrNot(Task.id)}>Done</button>
              )}
            </li>
          );
        })}
      </ul>
      <br />
      <button onClick={upperCaseAll}>UpperCase All</button>
      <button onClick={isDoneOrNotAll}>Done All</button>
    </div>
  );
}
