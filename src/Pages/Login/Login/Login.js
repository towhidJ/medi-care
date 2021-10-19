import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import useAuth from "./../../../hooks/useAuth";
import "./Login.css";
const Login = () => {
    const { signInUsingGoogle, setUser, setIsLoading, signInWithEmail } =
        useAuth();
    const [error, setError] = useState("");
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/";

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
        email: Yup.string().required("Email is Requied"),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const loginWithGoogle = () => {
        signInUsingGoogle()
            .then((result) => {
                setUser(result.user);
                history.push(redirect_url);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const loginWithEmail = (data, e) => {
        e.preventDefault();
        const { email, password } = data;
        signInWithEmail(email, password)
            .then((result) => {
                setUser(result.user);
                history.push(redirect_url);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const onSubmit = (data) => console.log(data);
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;
    return (
        <div className="flex items-center h-screen w-full bg-teal-lighter bg-gray-300 ">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto space-y-3">
                <h1 className="font-bold text-2xl text-yellow-500 text-center">
                    Sign In
                </h1>

                <form onSubmit={handleSubmit(loginWithEmail)}>
                    <div className="flex-row space-y-10">
                        <div className="flex flex-col mb-4 md:w-full">
                            <label className="loginLabel" htmlFor="email">
                                Email
                            </label>
                            <input
                                {...register("email")}
                                className="loginInput"
                            />
                            <span className="text-red-500">
                                {errors.email?.message}
                            </span>
                        </div>
                        <div className="flex flex-col mb-4 md:w-full">
                            <label className="loginLabel" htmlFor="password">
                                Password
                            </label>
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                className="loginInput text-gray-900"
                            />
                            <span className="text-red-500">
                                {errors.password?.message}
                            </span>
                            <p className="text-red-700 font-bold">{error}</p>
                        </div>
                        <div>
                            <button
                                className="w-full text-white font-extrabold bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded px-5 py-2"
                                type="submit"
                            >
                                {" "}
                                Login
                            </button>
                        </div>
                    </div>
                    <div>
                        <hr className="my-2" />
                        <div className="w-full bg-red-500 text-white text-center font-extrabold text-xl p-2 mb-2">
                            <button
                                className="btn btn-google btn-login text-uppercase fw-bold"
                                type="button"
                                onClick={loginWithGoogle}
                            >
                                <i className="fab fa-google me-2"></i> Sign in
                                with Google
                            </button>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <Link
                        className="block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker"
                        to="/register"
                    >
                        Create New Account
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
