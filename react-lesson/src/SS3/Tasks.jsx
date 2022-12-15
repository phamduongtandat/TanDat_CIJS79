import React from "react";
function Tasks() {
  return (
    <div>
      <ul className="task-list">
        <li>
          <input type="radio" /> Clean up bed room
        </li>

        <li>
          <input type="radio" /> Buy some milk
        </li>
        <li>
          <input type="radio" /> Jogging
        </li>
        <li>
          <input type="radio" /> Learn React
        </li>
        <li>
          <input type="radio" /> Do Exercises
        </li>
      </ul>
    </div>
  );
}

export default Tasks;
