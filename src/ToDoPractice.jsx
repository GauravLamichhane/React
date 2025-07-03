import { useState } from "react";
function ToDoPractice() {
  const [tasks, setTasks] = useState(["Eat", "Sleep", "Repeat"]);
  const [newtasks, setNewTasks] = useState("");

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }

  function addNewTask() {
    setTasks((t) => [...tasks, newtasks]);
    setNewTasks("");
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input type="text" value={newtasks} onChange={handleInputChange} />
        <button className="button" onClick={addNewTask}>
          Add
        </button>
      </div>
      <div>
        <ol>
          {tasks.map((task, index) => (
            <li>
              <span key={index}>{task}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default ToDoPractice;
