import React from "react";
import { Link } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
    const { user, logOut } = useAuth();
    const clickNavButton = () => {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden");
    };
    return (
        <div className=" shadow-lg sticky top-0 z-50 nav-bg">
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 py-6 container mx-auto  ">
                <div className="flex items-center flex-shrink-0 text-white mr-6 w-1/4">
                    <h1 className="text-white uppercase mx-5">SHC</h1>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={clickNavButton}
                        className="mobile-button flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white mx-5"
                    >
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="w-full hidden md:visible mobile-menu  lg:flex lg:items-center lg:w-auto mx-5">
                    <div className="text-sm   lg:flex-grow ">
                        <Link
                            to="/"
                            className="link block mt-4 lg:inline-block lg:mt-0  hover:text-black mr-4 link"
                        >
                            Home
                        </Link>

                        <Link
                            to="/services"
                            className="link block mt-4 lg:inline-block lg:mt-0  hover:text-black mr-4 link"
                        >
                            Services
                        </Link>

                        <Link
                            to="/about"
                            className="link block mt-4 lg:inline-block lg:mt-0  hover:text-black mr-4 link"
                        >
                            About Us
                        </Link>
                        <Link
                            to="/blog"
                            className="link block mt-4 lg:inline-block lg:mt-0  hover:text-black mr-4"
                        >
                            Blog
                        </Link>
                        <Link
                            to="/contact"
                            className="link block mt-4 lg:inline-block lg:mt-0  hover:text-black mr-4"
                        >
                            Contact Us
                        </Link>

                        {user?.email ? (
                            <>
                                <Link
                                    to="/dashboard"
                                    className="link block mt-4 lg:inline-block lg:mt-0  hover:text-black mr-4"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={logOut}
                                    className="block link mt-4 lg:inline-block lg:mt-0  hover:text-black mr-4"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                className="link block mt-4 lg:inline-block lg:mt-0  hover:text-black mr-4"
                            >
                                Login
                            </Link>
                        )}

                        {
                            <Link
                                to="/"
                                className="link block mt-4 lg:inline-block lg:mt-0  hover:text-black mr-4"
                            >
                                {user?.displayName}
                            </Link>
                        }
                        <Link
                            to="/appointment"
                            className="bg-red-400 inline-block mt-4  lg:mt-0 px-5 py-3 text-white font-bold hover:bg-blue-600"
                        >
                            Appointment
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
