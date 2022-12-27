import React from 'react';
import { useForm } from 'react-hook-form';

const AddTask = () => {

    const { register, handleSubmit } = useForm()
    const imgbbHostKey = process.env.REACT_APP_imgbbkey ;
    console.log(imgbbHostKey)

    const handleSubmitButton = data => {
        const image = data.photo[0];
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgbbHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => console.log(imgData))
    }

    return (
        <div className='h-screen dark:bg-slate-600'>
            <h3 className='text-2xl font-semibold text-center pt-4 text-blue-500 dark:text-teal-400 '>Add Your Daily Task</h3>
            <form onSubmit={handleSubmit(handleSubmitButton)} className='mt-5 px-10'>
                <div className='grid grid-cols-1 gap-6'>
                    <div className='form-control w-full max-w-[450px] mx-auto'>
                        <label className="label">
                            <span className="label-text block mb-2 font-semibold text-lg text-gray-900 dark:text-white">Task</span>
                        </label>
                        <input type="text"
                            {...register("task", {
                                required: 'Task is required'
                            })} className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:border-teal-600 max-w-[450px] mx-auto" placeholder="Please inter your task " />
                    </div>
                    <div className="form-control w-full max-w-[450px] mx-auto">
                        <label className="label">
                            <span className="label-text block mb-2 font-semibold text-lg text-gray-900 dark:text-white">Photo</span>
                        </label>
                        <input type="file"
                            {...register("photo", {
                                required: 'Photo is required'
                            })} className="border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-teal-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <input className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300  dark:bg-gradient-to-r dark:from-teal-400 dark:via-teal-500 dark:to-teal-600 dark:hover:bg-gradient-to-br dark:focus:ring-2 dark:focus:outline-none dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" value='Submit' type="submit" />
                </div>
                <div>
                </div>
            </form>
            {/* <div>
                <div className="max-w-[450px] mx-auto pt-10">
                    <label for="email" className="block mb-2 font-semibold text-lg text-gray-900 dark:text-white">Task</label>
                    <input type="text" id="task" className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please inter your task" required />
                </div>
                <div className='text-center mt-5'>
                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300  dark:bg-gradient-to-r dark:from-teal-400 dark:via-teal-500 dark:to-teal-600 dark:hover:bg-gradient-to-br dark:focus:ring-2 dark:focus:outline-none dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">submit</button>

                </div>
            </div> */}
        </div>
    );
};

export default AddTask;