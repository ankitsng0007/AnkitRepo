import React from 'react';
import {Routes,Route} from "react-router-dom";
import Books from './Books';
import SingleBook from './SingleBook';
import EditBook from './EditBook';
import LogIn from './LogIn';
import RequireAuth from '../Components/RequireAuth';

function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Books />} />
        <Route 
        path='/books/:id' 
        element={
          <RequireAuth>
        <SingleBook />
        </RequireAuth>
        } />
        <Route 
        path='/books/:id/edit' 
        element={
          <RequireAuth>
        <EditBook />
        </RequireAuth>
        } />
        <Route path='/login' element={<LogIn />} />
        <Route path='*' element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default MainRoutes;
