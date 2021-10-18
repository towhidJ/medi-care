import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const Header = () => {


    const clickNavButton=()=>{
       const btn = document.querySelector('button.mobile-button');
        const menu = document.querySelector('.mobile-menu');
            menu.classList.toggle('hidden');
    }
    return (
        <div className="bg-yellow-100">
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 py-6 container mx-auto">
                <div className="flex items-center flex-shrink-0 text-white mr-6 w-1/4">
                    <img src="icons/Group 33072.png"/>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={clickNavButton}
                        className="mobile-button flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full block hidden md:visible mobile-menu  lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm   lg:flex-grow ">
                        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Home
                        </Link>
                        <Link to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Product
                        </Link>
                        <Link to="/register" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            SignUp
                        </Link>
                        <Link to="/f" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
