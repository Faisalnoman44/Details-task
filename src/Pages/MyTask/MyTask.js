import { useQuery } from '@tanstack/react-query';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import React, { useState } from 'react';

const MyTask = () => {

    const [openModal, setOpenModal] = useState('');
    const [taskId, setTaskId] = useState('')
    const { data: alltask = [], refetch } = useQuery({
        queryKey: ['allTask'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/task')
            const data = await res.json()
            // console.log(data);
            return (data)
        }
    })

    const handleDelete = () => {g
        // console.log(taskId)
        fetch(`http://localhost:5000/task/${taskId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    refetch()
                }
            })
        setOpenModal(undefined)
    }

    return (
        <div>

            <div className="overflow-x-auto relative shadow-md dark:bg-slate-700 h-screen pt-2 ">
                <table className="max-w-3xl mx-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
                    <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-slate-700">
                        My Task
                    </caption>
                    <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:bg-gradient-to-r dark:from-teal-400 dark:via-teal-500 dark:to-teal-600 dark:hover:bg-gradient-to-br dark:text-white p-10 rounded-md">
                        <tr className='border-blue-400 dark:border-teal-600'>
                            <th scope="col" className="py-3 px-6 text-center">
                                Image
                            </th>
                            <th scope="col" className="py-3 px-6 text-center">Task Name</th>
                            <th scope="col" className="py-3 px-6 text-center">Edit</th>
                            <th scope="col" className="py-3 px-6 text-center"> Delete</th>
                            <th scope="col" className="py-3 px-6 text-center">Complete </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            alltask.map(task =>

                                <tr key={task._id} className="bg-white border-b dark:bg-slate-600 border-blue-400 dark:border-teal-600 text-center">
                                    <th scope="row" className="py-4 px-6  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className="w-10 h-10 rounded-full" src={task.image} alt="" />
                                    </th>
                                    <td className="py-4 px-6 text-gray-500 dark:text-white font-bold">
                                        {task.task}
                                    </td>
                                    <td className="py-4 px-6">
                                        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300  dark:bg-gradient-to-r dark:from-teal-400 dark:via-teal-500 dark:to-teal-600 dark:hover:bg-gradient-to-br dark:focus:ring-2 dark:focus:outline-none dark:focus:ring-teal-800 font-medium rounded-lg text-sm  px-3 md:px-5 py-2.5 text-center mr-2 mb-2">Edit</button>

                                    </td>
                                    <td className="py-4 px-6">
                                        <button type="button" className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300  dark:bg-gradient-to-r dark:from-red-600 dark:via-red-400 dark:to-red-500 dark:hover:bg-gradient-to-br dark:focus:ring-2 dark:focus:outline-none dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-3 md:px-5 py-2.5 text-center mr-2 mb-2" onClick={() => setOpenModal('pop-up', setTaskId(task._id))} >Delete</button>

                                        {/* //modal */}

                                        <Modal show={openModal === 'pop-up'} size="md" popup onClose={() => setOpenModal(undefined)}>
                                            <Modal.Header />
                                            <Modal.Body>
                                                <div className="text-center">
                                                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                        Are you sure you want to delete this product?
                                                    </h3>
                                                    <div className="flex justify-center gap-4">
                                                        <Button color="failure" onClick={() => handleDelete()}>
                                                            {"Yes, I'm sure"}
                                                        </Button>
                                                        <Button color="gray" onClick={() => setOpenModal(undefined, setTaskId(''))}>
                                                            No, cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Modal.Body>
                                        </Modal>

                                    </td>
                                    <td className="py-4 px-6 ">
                                        <button type="button" className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300  dark:bg-gradient-to-r dark:from-green-400 dark:via-green-500 dark:to-green-600 dark:hover:bg-gradient-to-br dark:focus:ring-2 dark:focus:outline-none dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-3 md:px-5 py-2.5 text-center mr-2 mb-2">Complete</button>

                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTask;