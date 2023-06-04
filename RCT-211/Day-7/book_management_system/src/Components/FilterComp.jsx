import React, { useState } from 'react';

function FilterComp() {
  const [category,setCategory] = useState([]);
  const handleFilterCheckbox =()=>{
     //check if data is present in the category.

     //if yes,then remove it (the user has unchecked the checkbox)

     //else add it in the category array,
     
  }
  return (
    <div>
      <h3>Filter Component</h3>
      <div>
        <input type='checkbox'value='Novel' onChange={handleFilterCheckbox}/>
        <label>Novel</label>
      </div>
      <div>
        <input type='checkbox' value="Motivational" onChange={handleFilterCheckbox}/>
        <label>Motivational</label>
      </div>
      <div>
        <input type='checkbox' value="Science" onChange={handleFilterCheckbox}/>
        <label>Science</label>
      </div>
    </div>
  );
}

export default FilterComp;
