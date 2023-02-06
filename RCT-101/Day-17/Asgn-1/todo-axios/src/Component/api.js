import axios from "axios";

export const getTodo=()=>{
    return axios.get(`http://localhost:8080/todos`);
}