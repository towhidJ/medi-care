import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "./../Shared/Header/Header";
import "./About.css";
import AboutMission from "./AboutMission";

const About = () => {
    return (
        <>
            <Header />
            <div className="py-2 px-5">
                <AboutMission></AboutMission>
                <div className="text-center mt-2 container mx-auto ">
                    <div className="font-bold">
                        <p style={{ color: "blue" }}>Why Choose Us</p>
                        <h1 style={{ color: "darkblue" }}>
                            Why People Choose ShopByte Medi care For Health
                            Services
                        </h1>
                    </div>
                    <p className="my-3 text-2xl">
                        Our purpose is to deliver excellence in service and
                        execution Our purpose is to deliver excellence in
                        service and Our purpose is to deliver excellence.
                    </p>
                    <div className="grid md:grid-cols-3 gap-5 justify-between">
                        <div className="about-card card w-50 mr-2">
                            <div className="card-body">
                                <h5 className="text-2xl font-bold">
                                    DOCTOR YOU CHOOSE
                                </h5>
                                <p className="card-text">
                                    Donec hendrerit rutrum nibh, id egestas
                                    magna sodales a. Fusce feugiat velit eu ante
                                    blandit facilisis.
                                </p>
                            </div>
                        </div>
                        <div className="about-card card w-50 mr-2">
                            <div className="card-body">
                                <h5 className="text-2xl font-bold">
                                    YOUR HEALTHCARE
                                </h5>
                                <p className="card-text">
                                    Vestibulum imperdiet vestibulum laoreet.
                                    Integer elementum euismod ante sit amet
                                    elementum.
                                </p>
                            </div>
                        </div>
                        <div className=" about-card card w-50">
                            <div className="card-body">
                                <h5 className="text-2xl font-bold">
                                    PREMIUM FACILITIES
                                </h5>
                                <p className="card-text">
                                    Donec porta tellus ac purus eleifend
                                    faucibus sit amet eu eros. Donec cursus
                                    laoreet felis, a cursus erat finibus sed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
