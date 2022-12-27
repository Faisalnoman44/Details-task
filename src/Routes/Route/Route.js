import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Outlet/Main';
import AddTask from '../../Pages/AddTask/AddTask';


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<AddTask></AddTask>
            }
        ]
    }
])

export default router;