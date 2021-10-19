import React from "react";
import "./Appointment.css";

const Appointment = () => {
    return (
        <div className=" bg-yellow-100 pt-5">
            <div className="md:px-36 md:pb-5">
                <h1 className="text-4xl text-center pt-5 mb-5">Appointment</h1>
                <div className="bg-blue-900 p-24 rounded shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 justify-center items-center">
                        <div className="col-span-2 md:col-span-1">
                            <input type="text" placeholder="Enter your Name" />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <input
                                type="email"
                                placeholder="Enter your Email"
                            />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <input
                                type="text"
                                placeholder="Enter your Phone Number"
                            />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <input
                                type="date"
                                placeholder="Enter select Appointment Date"
                            />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <select name="doctor" id="doctor">
                                <option>--Select Doctor--</option>
                                <option value="1">Dr. AKM Mustafiz</option>
                                <option value="2">Dr. Kosai</option>
                                <option value="3">Dr. Haturi</option>
                                <option value="4">Dr. Audi</option>
                            </select>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <select name="doctor" id="doctor">
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
