import { Card } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {

    const oneTask = useLoaderData()
    const { _id, image, task, isCompleted } = oneTask
    const navigate = useNavigate()
    // console.log(task)

    const completeButton = id => {
        console.log(id)
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/completedtask')
            })
    }

    return (
        <div className='min-h-screen flex justify-center items-center '>
            <div className="min-w-[250px]  border-blue-500">
                <Card className='border-blue-500 shadow-xl h-[340px]'>
                    <div className="flex flex-col items-center pb-10 border-blue-500">
                        <img
                            className="mb-3 h-28 w-28 rounded-full shadow-xl"
                            src={image}
                            alt=""
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{task}</h5>
                        <div className="mt-4 flex space-x-3 lg:mt-6">
                            {
                                isCompleted === 'completed' ? <p className='py-4 px-6 text-green-500 dark:text-teal-400 font-bold text-center'>Completed</p>
                                    :
                                    <Link
                                        
                                        className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => completeButton(_id)}
                                    >
                                        Complete
                                    </Link>
                            }

                            {
                                isCompleted === 'completed' ? <></> :
                                    <Link
                                        className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700" to={`/mytask/edit/${_id}`}
                                    >
                                        Edit
                                    </Link>
                            }


                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )


};

export default Details;