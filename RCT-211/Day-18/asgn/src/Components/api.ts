import axios ,{ AxiosResponse } from "axios"
import { Todo } from "./constants";


export const getTodos = async() => {
   let res : AxiosResponse< Todo[] > = await axios.get("http://localhost:8080/todos");
   return res.data ;
};


export const updateTodo = async ( changedTodo : Todo) : Promise<Todo> =>{
   let res : AxiosResponse< Todo > = await axios.patch(`http://localhost:8080/todos${changedTodo.id}`,
   {
      ...changedTodo,
   });
   return res.data ;
};