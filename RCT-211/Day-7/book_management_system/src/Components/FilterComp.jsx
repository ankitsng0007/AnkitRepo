import React, { useEffect, useState, useSearchParams} from 'react';

function FilterComp() {
  const [searchParams,setSearchParams] = useSearchParams()
  const [category,setCategory] = useState([]);
  const handleFilterCheckbox =(e)=>{
     //check if data is present in the category.
       const newCategories = [...category];
     //if yes,then remove it (the user has unchecked the checkbox)
       if (newCategories.includes(e.target.value)){
        //remove it
        newCategories.splice(newCategories.indexOf(e.target.value),1);
       }else{
     //else add it in the category array,
        newCategories.push(e.target.value)
      }
      setCategory(newCategories);
  };
  console.log(category);
  // if the category changes then update the value in url search params,
  useEffect(()=>{
    let params={};
    params.category= category;
    console.log(params);
    setSearchParams(params);
  },[category,setSearchParams]);

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
