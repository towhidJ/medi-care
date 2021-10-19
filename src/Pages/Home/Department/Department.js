import React from "react";
import "./Department.css";
const Department = () => {
    return (
        <div className=" bg-gray-200 py-5">
            <h1 className="text-4xl uppercase text-center font-bold text-green-700 ">
                Our Department
            </h1>
            <div className="grid md:grid-cols-6 container mx-auto gap-4  my-5 p-2">
                <div className="depCard">
                    <span>
                        <i className="fas fa-heartbeat"></i>
                    </span>
                    <h1>Cardiology</h1>
                </div>
                <div className="depCard">
                    <span>
                        <i className="fas fa-flask"></i>
                    </span>
                    <h1>Urology</h1>
                </div>
                <div className="depCard">
                    <span>
                        <i className="fas fa-head-side-virus"></i>
                    </span>
                    <h1>Neroulogy</h1>
                </div>
                <div className="depCard">
                    <span>
                        <i className="fas fa-brain"></i>
                    </span>
                    <h1>Orthopedics</h1>
                </div>
                <div className="depCard">
                    <span>
                        <i className="fas fa-x-ray"></i>
                    </span>
                    <h1>Radiology</h1>
                </div>
                <div className="depCard">
                    <span>
                        <i className="fas fa-flask"></i>
                    </span>
                    <h1>Sergery</h1>
                </div>
            </div>
        </div>
    );
};

export default Department;
