import React from 'react';

const CompletedTask = () => {
    return (
        <div>
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
                                <th scope="col" className="py-3 px-6 text-center">Completed</th>
                                <th scope="col" className="py-3 px-6 text-center">Not Completed</th>
                                <th scope="col" className="py-3 px-6 text-center"> comment</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className="bg-white border-b dark:bg-slate-600 border-blue-400 dark:border-teal-600">
                                <th scope="row" className="py-4 px-6  font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                                    <img className="w-10 h-10 rounded-full" src="https://i.ibb.co/gJKyzbC/frontendbackend2.png" alt="" />
                                </th>
                                <td className="py-4 px-6 text-gray-500 dark:text-white font-bold text-center">
                                    Sliver
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <div className='text-center'>
                                        <svg className="w-5 h-5 text-green-500 text-center" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    </div>

                                    <div className='text-center'>
                                        <svg className="w-5 h-5 text-red-500 text-center" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </div>

                                </td>
                                <td className="py-4 px-6 text-center">
                                    <button type="button" className="text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300  dark:bg-gradient-to-r dark:from-teal-600 dark:via-teal-400 dark:to-teal-500 dark:hover:bg-gradient-to-br dark:focus:ring-2 dark:focus:outline-none dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-3 md:px-5 py-2.5 text-center mr-2 mb-2">Not Completed</button>

                                </td>
                                <td className="py-4 px-6 text-center">

                                    <form className=''>
                                        <div className="w-full border border-blue-400 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 ">
                                            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                                <label htmlFor="comment" className="sr-only">Your comment</label>
                                                <textarea id="comment" rows="1" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
                                            </div>
                                            <div className="flex items-center justify-between px-2 py-2 border-t dark:border-gray-600">
                                                <button type="submit" className="inline-flex items-center py-2.5 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                                    Post comment
                                                </button>
                                                
                                            </div>
                                        </div>
                                    </form>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default CompletedTask;