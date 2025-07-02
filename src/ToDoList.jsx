import { useState } from "react";

function ToDoList() {
  const [tasks, Settasks] = useState(["eat", "sleep", "repeat"]);
  const [newtasks, Setnewtasks] = useState("");

  function handleInputChange(event) {
    Setnewtasks(event.target.value);
  }

  function addnewTask() {
    if (newtasks.trim() !== "") {
      Settasks((t) => [...t, newtasks]);
      Setnewtasks("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    Settasks(updatedTasks);
  }

  function movetaskUP(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      Settasks(updatedTasks);
    }
  }
  function movetaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      Settasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To Do Lists</h1>

      <div>
        <input
          type="text"
          value={newtasks}
          onChange={handleInputChange}
          placeholder="Enter the tasks..."
        />
        <button className="add-button" onClick={addnewTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="up-button" onClick={() => movetaskUP(index)}>
              👆
            </button>
            <button className="down-button" onClick={() => movetaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
