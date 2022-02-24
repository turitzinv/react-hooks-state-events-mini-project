import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  const tasksArray = tasks.map((task) => {
    return (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        onDelete={handleDelete}
      />
    );
  });

  return <div className="tasks">{tasksArray}</div>;
}

export default TaskList;
