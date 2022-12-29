import { useQuery } from '@tanstack/react-query';
import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';


const CompletedTask = () => {

    const { register, handleSubmit } = useForm()
    const [openModal, setOpenModal] = useState('');
    const [taskId, setTaskId] = useState('')
    const [commentTaskId, setCommentTaskId] = useState(null)
    const navigate = useNavigate()

    const { data: alltask = [], refetch } = useQuery({
        queryKey: ['allTask'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/task')
            const data = await res.json()
            // console.log(data);
            return (data)
        }
    })

    const handleDelete = () => {
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

    const handleSubmitButton = data => {
        const id = commentTaskId
        console.log(id)
        const comment = {
          comment: data.comment
        }
        console.log(comment);
        const url = `http://localhost:5000/completedtask/${id}`
        console.log(url);
        fetch(url,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                setCommentTaskId(null)
                refetch()
            }
        })

    }

    const handleIdGet = id => {
        setCommentTaskId(id)
    }

    const notCompletedButton = () => {
        navigate('/mytask')
    }

    return (
        <div>
            <div>

                <div className="overflow-x-auto relative shadow-md dark:bg-slate-700 min-h-screen pt-2 ">
                    <table className="max-w-4xl mx-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
                        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-slate-700">
                            Completed Task
                        </caption>
                        <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:bg-gradient-to-r dark:from-teal-400 dark:via-teal-500 dark:to-teal-600 dark:hover:bg-gradient-to-br dark:text-white p-10 rounded-md">
                            <tr className='border-blue-400 dark:border-teal-600'>
                                <th scope="col" className="py-3 px-6 text-center">
                                    Image
                                </th>
                                <th scope="col" className="py-3 px-6 text-center">Task Name</th>
                                <th scope="col" className="py-3 px-4 text-center">Completed</th>
                                <th scope="col" className="py-3 px-4 text-center">Not Completed</th>
                                <th scope="col" className="py-3 px-6 text-center">Delete</th>
                                <th scope="col" className="py-3 px-6 text-center"> comment</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                alltask.map(task =>
                                    <tr key={task._id} className="bg-white border-b dark:bg-slate-600 border-blue-400 dark:border-teal-600">
                                        <th scope="row" className="py-4 px-6  font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                                            <img className="w-10 h-10 rounded-full" src={task.image} alt="" />
                                        </th>
                                        <td className="py-4 px-6 text-gray-500 dark:text-white font-bold text-center">
                                            {task.task}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {
                                                task.isCompleted === 'completed' ?

                                                    <div className='text-center'>
                                                        <svg className="w-5 h-5 text-green-500 text-center" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                    </div>
                                                    :
                                                    <div className='text-center'>
                                                        <svg className="w-5 h-5 text-red-500 text-center" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                    </div>
                                            }
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {
                                                task.isCompleted === 'completed' ?
                                                    <div className=''>
                                                        <svg className="w-5 h-5 text-green-500 text-center" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                    </div>
                                                    :
                                                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300  dark:bg-gradient-to-r dark:from-teal-600 dark:via-teal-400 dark:to-teal-500 dark:hover:bg-gradient-to-br dark:focus:ring-2 dark:focus:outline-none dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-3 md:px-5 py-2.5 text-center mr-2 mb-2" onClick={() => notCompletedButton()}>Not Completed</button>

                                            }

                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {
                                                task.isCompleted === 'completed' ?
                                                    <button type="button" className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300  dark:bg-gradient-to-r dark:from-red-600 dark:via-red-400 dark:to-red-500 dark:hover:bg-gradient-to-br dark:focus:ring-2 dark:focus:outline-none dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-3 md:px-5 py-2.5 text-center mr-2 mb-2" onClick={() => setOpenModal('pop-up', setTaskId(task._id))} >Delete</button>
                                                    :
                                                    <p className='py-4 px-6 text-gray-500 dark:text-white font-bold text-center'>Not Available</p>
                                            }


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
                                        <td className="py-4 px-2 md:px-6 text-center">
                                            {
                                                task.isCompleted === 'completed' ?
                                                task.comment ? <p className='py-4 px-6 text-gray-500 dark:text-teal-400 font-bold text-center'>{task.comment}</p> :
                                                    <form onSubmit={handleSubmit(handleSubmitButton)} className=''>
                                                        <div className="w-full border border-blue-400 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 ">
                                                            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                                                <label htmlFor="comment" className="sr-only">Your comment</label>
                                                                <textarea
                                                                    {...register("comment", {
                                                                        required: 'comment is required'
                                                                    })}
                                                                    id="comment" rows="1" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
                                                            </div>
                                                            <div className="flex items-center justify-between px-2 py-2 border-t dark:border-gray-600">
                                                                <input onClick={() => handleIdGet(task._id)} type="submit" value='comment' className="inline-flex items-center py-2.5 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-2 focus:ring-blue-200 dark:bg-gradient-to-r dark:from-teal-400 dark:via-teal-500 dark:to-teal-600 dark:hover:bg-gradient-to-br
                                                        dark:focus:ring-blue-900 hover:bg-blue-800">
                                                                </input>

                                                            </div>
                                                        </div>
                                                    </form>
                                                    :
                                                    <p className='py-4 px-6 text-gray-500 dark:text-white font-bold text-center'>Not Available</p>
                                            }
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default CompletedTask;