import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Outlet/Main';
import AddTask from '../../Pages/AddTask/AddTask';
import CompletedTask from '../../Pages/CompletedTask/CompletedTask';
import Login from '../../Pages/Login/Login';
import Details from '../../Pages/MyTask/Details';
import Edit from '../../Pages/MyTask/Edit';
import MyTask from '../../Pages/MyTask/MyTask';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


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
                path: '/mytask/details/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/task/details/${params.id}`)
            },
            {
                path: '/mytask/edit/:id',
                element:<Edit></Edit>,
                loader: ({params}) => fetch(`http://localhost:5000/task/details/${params.id}`)
            },
            {
                path:'/completedtask',
                element:<CompletedTask></CompletedTask>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    }
])

export default router;