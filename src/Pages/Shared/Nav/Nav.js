import { Navbar } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Nav = () => {

    const {logOut, user } = useContext(AuthContext)


    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : 'system'
    )
    const element = document.documentElement
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
    // console.log(darkQuery, 'darkQuery')

    const option = [
        {
            icon: 'sunny',
            text: 'light'
        },
        {
            icon: 'moon',
            text: 'dark'
        },
        {
            icon: 'desktop-outline',
            text: 'system'
        }
    ]

    const onWindowMatch = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
            element.classList.add('dark')
        }
        else {
            element.classList.remove('dark')
        }
    }
    onWindowMatch()

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark')
                localStorage.setItem('theme', 'dark')
                break;
            case 'light':
                element.classList.remove('dark')
                localStorage.setItem('theme', 'light')
                break;

            default:
                localStorage.removeItem('theme')
                onWindowMatch()
                break;
        }
    }, [theme])

    darkQuery.addEventListener('change', (e) => {
        if (!("theme" in localStorage)) {
            element.classList.add('dark')
        }
        else {
            element.classList.remove('dark')
        }
    })

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }


    return (
        <div className=" max-w-6xl shadow-xl bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 mb-12">
            <Navbar className='fixed w-full z-20 top-0 max-w-6xl bg-blue-500'>
                <Navbar.Brand href="https://flowbite.com/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJLyunViTG4Y2n2SOSy9eneY9rJC6IYzWbQ&usqp=CAU" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Daily Task</span>
                </Navbar.Brand>
                <div className="flex md:order-2 ">
                    {
                        option.map(opt => <button key={opt.text} onClick={() => setTheme(opt.text)} className={`w-8 h-8 m-1 text-xl  rounded-full bg-white leading-9 ${theme === opt.text && "text-sky-600"}`}>
                            <ion-icon name={opt.icon}></ion-icon>
                        </button>)
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='text-white dark:text-gray-400 '>
                    <Link className='font-semibold text-lg hover:text-gray-300 dark:hover:text-teal-500 ' to='/addtask'>Add Task</Link>
                    <Link className='font-semibold text-lg hover:text-gray-300 dark:hover:text-teal-500 ' to='/mytask'>My Task</Link>
                    <Link className='font-semibold text-lg hover:text-gray-300 dark:hover:text-teal-500 ' to='/completedtask'>Completed Task</Link>
                    {
                        user?.email ?
                            <Link onClick={handleLogOut} className='font-semibold text-lg hover:text-gray-300 dark:hover:text-teal-500 ' >Logout</Link> :
                            <Link className='font-semibold text-lg hover:text-gray-300 dark:hover:text-teal-500 ' to='/login'>Login</Link>
                    }

                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Nav;