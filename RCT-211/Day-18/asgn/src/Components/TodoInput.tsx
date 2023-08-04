import React, { useState } from 'react';
import { Todo } from './constants';


type TodoInputProps = {
  OnAdd: (todo: Todo) => void ; 
};
const TodoInput = (props : TodoInputProps) => {
  const { OnAdd } = props;
  const [value,setValue] = useState<string>("");

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  return (
    <div>
      TodoInput
    </div>
  );
}

export default TodoInput;
