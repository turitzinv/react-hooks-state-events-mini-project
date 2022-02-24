import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [tasks, setTasks] = useState(TASKS)
const [categoryList, setCategories] = useState(CATEGORIES)
const [selectedCategory, setSelectedCategory] = useState("All")

function handleDelete(e){
  const text = e.target.value
  const newTasks = tasks.filter((list) => {
    return list.text !== text
  })
  setTasks(newTasks)
}

function tasksToRender() {
  if(selectedCategory === "All"){
    return tasks
  } else {
    return tasks.filter((task) => 
    task.category === selectedCategory
    )
  }
}

function onTaskFormSubmit(newTask) {
  setTasks([...tasks, newTask])
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} sellCategory={selectedCategory} setSellCategory={setSelectedCategory} />
      <NewTaskForm categories={categoryList} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasksToRender()} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
