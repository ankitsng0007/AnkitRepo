import axios from "axios"


export const getTodos = async() => {
   let res = axios.get("http://localhost:8080/todos");
   return (await res).data;
}