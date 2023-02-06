import axios from "axios";

export const getTodo=(params={})=>{
    return axios.get(`http://localhost:8080/todos`,{
        params:{
            _page : params.page,
            _limit : params.limit
        }
    });
}