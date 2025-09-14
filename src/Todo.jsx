import { useState } from "react";
import "./index.css";

export default function TodoApp() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function addTasks() {
    if (input.trim()) {
      setList([...list, input.trim()]);
      setInput("");
    }
  }

  function deleteTasks(i) {
    setList(list.filter((_, index) => index !== i));
  }

  return (
    <div className="container">
      <h3>To-Do List</h3>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task"
        />
        <button className="btn" onClick={addTasks}>
          Add
        </button>
      </div>
      <ul>
        {list.map((task, i) => (
          <li key={i}>
            {task}
            <button className="delete-btn" onClick={() => deleteTasks(i)}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
