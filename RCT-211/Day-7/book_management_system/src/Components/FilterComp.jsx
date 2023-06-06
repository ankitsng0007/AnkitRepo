import React, { useEffect, useState } from 'react';
import {useSearchParams} from "react-router-dom"

function FilterComp() {
  const [searchParams,setSearchParams] = useSearchParams()
  const initialCategory = searchParams.getAll("category");
  console.log("initialcategory",initialCategory)
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
        <input 
        type='checkbox'
        value='Novel'
        checked={category.includes("Novel")} 
        onChange={handleFilterCheckbox}/>
        <label>Novel</label>
      </div>
      <div>
        <input 
        type='checkbox' 
        value="Motivational" 
        checked={category.includes("Motivational")}
        onChange={handleFilterCheckbox}/>
        <label>Motivational</label>
      </div>
      <div>
        <input 
        type='checkbox' 
        value="Science" 
        checked={category.includes("Science")}
        onChange={handleFilterCheckbox}/>
        <label>Science</label>
      </div>
      <div>
        <h3>Sort Component</h3>
        <div>
          <input type='radio' value="asc" name='sortBy'/>
          <label>Ascending</label>
        </div>
        <div>
          <input type='radio' value="dec" name='sortBy'/>
          <label>Decending</label>
        </div>
      </div>
    </div>
  );
}

export default FilterComp;
