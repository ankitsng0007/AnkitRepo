import React from 'react';

function FilterComp() {
  const handleFilterCheckbox =()=>{

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
