import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../images/about.jpg";
const AboutMission = () => {
    return (
        <div>
            <section
                style={{ backgroundColor: "aliceblue" }}
                className="container-fluid p-5 "
            >
                <div className="md:grid md:grid-cols-2 items-start justify-center gap-2">
                    <div className="px-2 w-full mr-4 ">
                        <img className="w-full" src={aboutImg} alt="header" />
                    </div>
                    <div className="text-justify text-black px-3">
                        <p className="pt-3 lg:pt-0 font-bold">About Us</p>
                        <h1 className="  font-bold text-3xl">
                            About Healthcare Success
                        </h1>
                        <p className="">
                            Born in Melbourne’s Docklands, WebAlive is one of
                            the pioneers in providing end-to-end web solutions
                            for businesses in Australia. Over the last 15 years,
                            we have transformed businesses by combining our
                            strong technical ability with our deep understanding
                            of the digital landscape.
                        </p>
                        <button className="mt-5 font-bold bg-indigo-300 rounded hover:bg-blue-400  py-2 px-4 -uppercase">
                            <Link to="/services">All Services</Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMission;
