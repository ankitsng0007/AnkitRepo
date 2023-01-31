import {Route,Routes} from "react-router-dom";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { PageNotFound } from "./PageNotFound";
import { SingleUserPage } from "./SingleUserPage";
import { Users } from "./Users";

export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/users/:id" element={<SingleUserPage/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    )
}