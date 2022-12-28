import { Navbar } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {


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


    return (
        <div className=" max-w-6xl shadow-xl bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600">
            <Navbar >
                <Navbar.Brand href="https://flowbite.com/">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
                </Navbar.Brand>
                <div className="flex md:order-2 ">
                    {
                        option.map(opt => <button key={opt.text} onClick={() => setTheme(opt.text)} className={`w-8 h-8 m-1 text-xl  rounded-full bg-white leading-9 ${theme === opt.text && "text-sky-600"}`}>
                            <ion-icon name={opt.icon}></ion-icon>
                        </button>)
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='text-slate-700 dark:text-gray-400 '>
                    <Link className='font-semibold text-lg hover:text-blue-500 dark:hover:text-teal-500 ' to='/addtask'>Add Task</Link>
                    <Link className='font-semibold text-lg hover:text-blue-500 dark:hover:text-teal-500 ' to='/mytask'>My Task</Link>
                    <Link className='font-semibold text-lg hover:text-blue-500 dark:hover:text-teal-500 ' to='/completedtask'>Completed Task</Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Nav;