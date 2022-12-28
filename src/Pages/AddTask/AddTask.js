import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {

    const { register, handleSubmit } = useForm()
    const imgbbHostKey = process.env.REACT_APP_imgbbkey;
    const navigate = useNavigate()

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
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    const taskDetails = {
                        image: imgData.data.url,
                        task: data.task
                    }
                    fetch('http://localhost:5000/task', {
                        method: 'POST',
                        headers: {
                            'content-type' : 'application/json',
                        },
                        body: JSON.stringify(taskDetails)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        navigate('/mytask')
                    })

                }
            })
    }

    return (
        <div className='h-screen dark:bg-slate-600'>
            <h3 className='text-2xl font-semibold text-center pt-4 text-slate-700 dark:text-white '>Add Your Daily Task</h3>
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

                        <div className="flex items-center justify-center w-full ">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center border-blue-400 justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-teal-600 dark:hover:border-gray-500 dark:hover:bg-gray-800">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input {...register("photo", {
                                    required: 'Photo is required',
                                })}
                                   required id="dropzone-file" type="file" className=""/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <input className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300  dark:bg-gradient-to-r dark:from-teal-400 dark:via-teal-500 dark:to-teal-600 dark:hover:bg-gradient-to-br dark:focus:ring-2 dark:focus:outline-none dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" value='Submit' type="submit" />
                </div>
                <div>
                </div>
            </form>
        </div>
    );
};

export default AddTask;