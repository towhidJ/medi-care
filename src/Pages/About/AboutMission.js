import React from "react";
import aboutImg from "../../images/about.jpg";
const AboutMission = () => {
    return (
        <div>
            <section
                style={{ backgroundColor: "aliceblue" }}
                className="container-fluid mt-5  md:p-5 "
            >
                <div className="md:flex items-center justify-between">
                    <div className="px-2 w-full mr-4">
                        <img className="" src={aboutImg} alt="header" />
                    </div>
                    <div className="text-justify text-black ">
                        <p className="pt-3 lg:pt-0 font-bold">About Us</p>
                        <h1 className=" display-4 font-bold">
                            About Healthcare Success
                        </h1>
                        <p>
                            Born in Melbourne’s Docklands, WebAlive is one of
                            the pioneers in providing end-to-end web solutions
                            for businesses in Australia. Over the last 15 years,
                            we have transformed businesses by combining our
                            strong technical ability with our deep understanding
                            of the digital landscape.
                        </p>
                        <button className="px-4 py-2 bg-indigo-300 rounded hover:bg-blue-400  py-2 px-4 -uppercase">
                            Join Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMission;
