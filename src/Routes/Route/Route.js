import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Outlet/Main';
import AddTask from '../../Pages/AddTask/AddTask';
import CompletedTask from '../../Pages/CompletedTask/CompletedTask';
import MyTask from '../../Pages/MyTask/MyTask';


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<AddTask></AddTask>
            },
            {
                path:'/addtask',
                element:<AddTask></AddTask>
            },
            {
                path: '/mytask',
                element:<MyTask></MyTask>
            },
            {
                path:'/completedtask',
                element:<CompletedTask></CompletedTask>
            }
        ]
    }
])

export default router;