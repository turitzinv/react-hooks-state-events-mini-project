import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [selectCategory, setSelectedCategory] = useState("")
  const [inputText, setInputText] = useState("")
  
  function handleSelectCategory(event) {
    setSelectedCategory(event.target.value)
  }
  
  function handleInputText(event) {
    setInputText(event.target.value)
    // console.log(event.target.value)
  }

  // console.log(categories)
const taskFormCategories = categories.map((category, index) => {
 if( category !== "All") {
    return <option key={index}>{category}</option>
  }
})
// console.log(taskFormCategories)

function handleFormSubmit(e) {
  e.preventDefault()
  onTaskFormSubmit({
    key: inputText,
    text: inputText,
    category: selectCategory
  })
}
  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={inputText} onChange={handleInputText} />
      </label>
      <label>
        Category
        <select name="category" value={selectCategory} onChange={handleSelectCategory}>
          {taskFormCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
