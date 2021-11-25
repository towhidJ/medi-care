import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./Appointment.css";

const Appointment = () => {
    const { user } = useAuth();
    let userData = {
        name: user?.displayName,
        email: user?.email,
        phone: "",
        date: "",
        time: "",
        doctor: "",
        category: "",
        message: "",
        status: "Pending",
    };

    const [appointment, setAppointment] = useState(userData);
    const handleSubmit = (e) => {
        console.log(appointment);

        fetch("http://localhost:5000/appointments", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(appointment),
        }).then((result) => {
            console.log(result);
        });
        e.preventDefault();
        e.target.reset();
    };
    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newAppointment = { ...appointment };
        newAppointment[field] = value;
        setAppointment(newAppointment);
    };
    return (
        <>
            <Header />
            <div className=" bg-yellow-100 pt-5">
                <div className="md:px-36 md:pb-5">
                    <h1 className="text-4xl text-center pt-5 mb-5">
                        Appointment
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="bg-blue-900 p-24 rounded shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 justify-center items-center">
                                <div className="col-span-2 md:col-span-2">
                                    <input
                                        type="text"
                                        placeholder="Enter your Name"
                                        defaultValue={user?.displayName}
                                        readOnly
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        defaultValue={user?.email}
                                        readOnly
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Enter your Phone Number"
                                        defaultValue={appointment.phone}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <input
                                        type="date"
                                        placeholder="Enter select Appointment Date"
                                        name="date"
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <input
                                        type="time"
                                        name="time"
                                        placeholder="Enter select Appointment Date"
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <select
                                        name="doctor"
                                        id="doctor"
                                        onBlur={handleBlur}
                                    >
                                        <option>--Select Doctor--</option>
                                        <option value="Dr. AKM Mustafiz">
                                            Dr. AKM Mustafiz
                                        </option>
                                        <option value="Dr. Kosai">
                                            Dr. Kosai
                                        </option>
                                        <option value="Dr. Haturi">
                                            Dr. Haturi
                                        </option>
                                        <option value="Dr. Audi">
                                            Dr. Audi
                                        </option>
                                    </select>
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <select
                                        name="category"
                                        id="category"
                                        onBlur={handleBlur}
                                    >
                                        <option>--Select Department--</option>
                                        <option value="Neurologu">
                                            Neurologu
                                        </option>
                                        <option value="Cardiology">
                                            Cardiology
                                        </option>
                                        <option value="Radiology">
                                            Radiology
                                        </option>
                                        <option value="CosmeticSurgery">
                                            Cosmetic Surgery
                                        </option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <textarea
                                        className="w-full h-24 px-5"
                                        type="text"
                                        name="message"
                                        placeholder="Enter your Message"
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <button
                                    className="col-span-2 px-5 py-2 mx-auto uppercase shadow-lg text-white font-bold bg-indigo-500"
                                    type="submit"
                                >
                                    Appointment Now
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Appointment;
