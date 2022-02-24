import React from "react";

function CategoryFilter({ categories, sellCategory, setSellCategory }) {

  // function handleSetCategory(input) {
  //   setSellCategory(input)
  // }

// console.log(setSellCategory)
  const newCategoryList = categories.map((category, index) => { 
    const isSelected = category === sellCategory ? "selected" : null
  return <button key={index} className={isSelected} onClick={() => setSellCategory(category)}>{category}</button>
})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {newCategoryList}
    </div>
  );
}

export default CategoryFilter;
