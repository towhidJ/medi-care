import React from "react";
import "./Appointment.css";

const Appointment = () => {
    return (
        <div className=" bg-yellow-100">
            <div className="flex items-center flex-col h-screen w-full justify-center space-y-5">
                <h1 className="text-4xl text-center">Appointment</h1>
                <div className="bg-blue-900 p-24 rounded shadow-lg">
                    <div className="grid md:grid-cols-2 gap-5 justify-center items-center">
                        <div>
                            <input type="text" placeholder="Enter your Name" />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter your Phone Number"
                            />
                        </div>
                        <div>
                            <input
                                type="date"
                                className="w-full"
                                placeholder="Enter select Appointment Date"
                            />
                        </div>
                        <div>
                            <select
                                name="doctor"
                                id="doctor"
                                className=" w-full"
                            >
                                <option>--Select Doctor--</option>
                                <option value="1">Dr. AKM Mustafiz</option>
                                <option value="2">Dr. Kosai</option>
                                <option value="3">Dr. Haturi</option>
                                <option value="4">Dr. Audi</option>
                            </select>
                        </div>
                        <div>
                            <select
                                name="doctor"
                                id="doctor"
                                className=" w-full"
                            >
                                <option>--Select Department--</option>
                                <option value="1">Neurologu</option>
                                <option value="2">Cardiology</option>
                                <option value="3">Radiology</option>
                                <option value="4">Cosmetic Surgery</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <textarea
                                className="w-full h-24 px-5"
                                type="text"
                                placeholder="Enter your Message"
                            />
                        </div>
                        <button className="col-span-2 px-5 py-2 mx-auto uppercase shadow-lg text-white font-bold bg-indigo-500">
                            Appointment Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
