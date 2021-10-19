import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../../images/3.png";
const Banner = () => {
    return (
        <div>
            <section
                class="  container-fluid md:flex justify-around items-center pt-12 px-8"
                style={{ backgroundColor: "#264653" }}
            >
                <div class="space-y-4">
                    <h1 class="text-4xl md:text-7xl font-bold uppercase">
                        <span class="text-yellow-300">Best Medical Center</span>
                        <br />
                        <span class="text-white">In Chittagong</span>
                    </h1>
                    <p class="w-2/3 text-white">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit am aliquam beatae, aut magnam.
                    </p>
                    <button
                        to="/services"
                        class=" bg-gradient-to-r from-red-500 via-red-800 to-red-400 text-white uppercase px-7 py-4 rounded-xl font-medium hover:bg-blue-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <Link to="/services">All Services</Link>
                    </button>
                </div>
                <div>
                    <img src={bannerImg} alt="Banner" />
                </div>
            </section>
        </div>
    );
};

export default Banner;
