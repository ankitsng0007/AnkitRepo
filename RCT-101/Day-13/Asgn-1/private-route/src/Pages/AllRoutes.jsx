import {Route,Routes} from "react-router-dom";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { PageNotFound } from "./PageNotFound";
import { SingleUserPage } from "./SingleUserPage";
import { Users } from "./Users";
import { PrivateRoute } from "../Context/PrivateRoute";

export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/users" element={
            <PrivateRoute>
                <Users/>
            </PrivateRoute>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/users/:id" element={
            <PrivateRoute>
                <SingleUserPage/>
            </PrivateRoute>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    )
}