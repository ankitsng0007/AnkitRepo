import axios ,{ AxiosResponse } from "axios"
import { Todo } from "./constants";


export const getTodos = async() => {
   let res : AxiosResponse< Todo[] > = await axios.get("http://localhost:8080/todos");
   return res.data ;
};