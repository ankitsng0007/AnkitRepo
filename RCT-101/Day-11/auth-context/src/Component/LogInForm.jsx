import React from "react";
import { AppContext } from "../Context/AppContextProvider";
import Form from "./Form";

function LogInForm() {
  const {handleLogIn}=React.useContext(AppContext)
  const [userName,setUserName]=React.useState();
  const onSubmit=(e)=>{
    e.preventDefault();
    handleLogIn(userName);
  };
  return (
        <Form onSubmit={onSubmit} title="LOG IN">
          <input value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="Enter Name"/>
        </Form>
  );
}
export default LogInForm;