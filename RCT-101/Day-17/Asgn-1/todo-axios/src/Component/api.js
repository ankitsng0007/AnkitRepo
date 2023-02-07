import axios from "axios";

export const getTodo=(params={})=>{
    return axios.get(`http://localhost:8080/todos`,{
        params:{
            _page : params.page,
            _limit : params.limit,
            _sort : params.order,
            _order : params.order
        }
    });
}
export const AddNewTodo=(item={})=>{
    return axios.post(`http://localhost:8080/todos`,{
        title: item.title,
        status:item.status
    })
}