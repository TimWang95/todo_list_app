/* eslint-disable react/prop-types */
import { useState } from "react";

export const EditTodoForm = ({ editTask, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTask(value, task.id);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="todo-btn">Update task</button>
    </form>
  );
};
