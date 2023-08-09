import React, { useState } from 'react';
import { Todo } from './constants';


type TodoInputProps = {
  OnAdd: (todo: Todo) => void ; 
};
const TodoInput = (props : TodoInputProps) => {
  const { OnAdd } = props;
  const [value,setValue] = useState<string>("");

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {};
  return (
    <form>
      <input type='text' placeholder='Type Here ...' value={value} onChange={handleChange}/>
      <select></select>
      <button type='submit'>Add</button>
    </form>
  );
}

export default TodoInput;
