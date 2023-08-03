import axios from "axios"


export const getTodos = async() => {
   let res = await axios.get("http://localhost:8080/todos");
   return res.data ;
};