import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {

    const { createUser, googleSignIn } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleSingUp = data => {
        console.log(data.email, data.password);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                setSignUpError('')
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }

    const handleGoogleSingIn = () => {

        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                setSignUpError(err.message)
                console.log(err)})
    }

    return (
        <div className='flex justify-center items-center'>
            <div className="my-20 md:mt-16 flex justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  md:h-full ">
                <div className="relative w-full h-full max-w-md md:h-auto">
                    <div className="relative bg-blue-400 rounded-lg shadow dark:bg-gray-700 max-w-[350px] mx-auto border-blue-500">
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign Up to our platform</h3>
                            <form className="space-y-6" onSubmit={handleSubmit(handleSingUp)}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email"
                                        {...register("email", {
                                            required: "Email Address is required"
                                        })}
                                        name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                    {errors.email && <p className='text-error' role="alert">{errors.email?.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                    <input type="password"
                                        {...register("password", {
                                            required: "Password Address is required"
                                        })}
                                        name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    {errors.password && <p className='text-error' role="alert">{errors.password?.message}</p>}
                                </div>
                                <input type="submit" value='Sign Up to your account' className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
                                <div>
                                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                                </div>
                            </form>
                            <div onClick={() => handleGoogleSingIn()} className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5 text-center'>
                                <button className='flex text-center'>
                                    <img className='h-8 w-8 ml-16 mr-3' src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png" alt="" />
                                    <p className='mt-1'>Continue with google</p>
                                </button>
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-3">
                                Already have an account? <Link to='/login' className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;