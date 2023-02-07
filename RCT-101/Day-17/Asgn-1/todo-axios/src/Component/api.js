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
/*export const DeleteTodo=(id)=>{
    return({
        method:"DELETE",
        baseURL:"http://localhost:8080",
        url:`/todos/${id}`
    });
}*/
export const DeleteTodo=(id)=>{
    return axios.delete(`http://localhost:8080/todos/${id}`)
}
export const ToggleTodo=(id,status)=>{
    return axios.patch(`http://localhost:8080/todos/${id}`,{
        status:!status
    })
}