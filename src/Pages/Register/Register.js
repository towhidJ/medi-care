import React from 'react';
import {Link, useHistory} from "react-router-dom";
import LoginImg from '../../images/login.jpg'
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
const Register = () => {

    const history = useHistory();
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required")
            .email("Email is invalid"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = (data, e) => {
        e.preventDefault();
        // history.push('/login')
        console.log(data);
        return false;
    };

    return (
        <div className="bg-white mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
                <div className="w-full">
                    <img src={LoginImg} />
                </div>
                <div className="flex items-center h-screen w-full bg-teal-lighter">
                    <div className="w-full bg-green-100 rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                        <h1 className="block w-full text-center text-grey-darkest mb-6">Sign Up</h1>
                        <form className="mb-4 md:flex md:flex-wrap md:justify-between" onSubmit={handleSubmit(onSubmit)} >

                            <div className="flex flex-col mb-4 md:w-full">
                                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                                       htmlFor="email">Email</label>
                                <input {...register("email")} className="border py-2 px-3 " type="email" name="email" id="email"/>
                                <span className="text-red-500">{errors.email?.message}</span>
                            </div>
                            <div className="flex flex-col mb-6 md:w-full">
                                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                                       htmlFor="password">Password</label>
                                <input {...register("password")} className="border py-2 px-3 " type="password" name="password"
                                       id="password"/>
                                <span className="text-red-500">{errors.password?.message}</span>
                            </div>
                            <div className="flex flex-col mb-6 md:w-full">
                                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                                       htmlFor="confirmPassword">Confirm Password</label>
                                <input {...register("confirmPassword")} className="border py-2 px-3 text-grey-darkest" type="password" name="confirmPassword" id="confirmPassword"
                                       />
                                <span className="text-red-500">{errors.confirmPassword?.message}</span>
                            </div>
                            <button
                                className="block bg-red-400 hover:bg-green-600 font-extrabold text-white uppercase text-lg mx-auto p-4 rounded"
                                type="submit" >Create Account
                            </button>
                        </form>
                        <Link className="block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker"
                              to="/login">Already have an account?</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;
