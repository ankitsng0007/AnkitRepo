import React from "react";
import { AppContext } from "../Context/AppContextProvider";
import Form from "./Form";

function LogInForm() {
  const {setIsAuth,setToken}=React.useContext(AppContext)
  const onSubmit=(e)=>{
    e.preventDefault();
    setIsAuth(true);
    setToken("ewjninec");
  };
  return (
        <Form onSubmit={onSubmit} title="LOG IN">
          <input placeholder="Enter Name"/>
        </Form>
  );
}
export default LogInForm;