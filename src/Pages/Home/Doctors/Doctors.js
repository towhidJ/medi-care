import React from "react";
import doctor1 from "../../../images/1.png";
const Doctors = () => {
    return (
        <>
            <h1 className="text-center text-4xl p-5">Our Qualified Doctors</h1>
            <div className="grid md:grid-cols-3 ">
                <div className="flex justify-center items-center mt-5">
                    <div className="max-w-lg mx-auto">
                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                            <img
                                className="rounded-t-lg h-64"
                                src={doctor1}
                                alt=""
                            />

                            <div className="p-5 text-center">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                                    Dr. Farnandoz
                                </h5>

                                <p className="font-normal text-center text-gray-700 mb-3">
                                    Cardiology
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-5">
                    <div className="max-w-lg mx-auto">
                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                            <img
                                className="rounded-t-lg h-64"
                                src={doctor1}
                                alt=""
                            />

                            <div className="p-5 text-center">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                                    Dr. Farnandoz
                                </h5>

                                <p className="font-normal text-center text-gray-700 mb-3">
                                    Cardiology
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-5">
                    <div className="max-w-lg mx-auto">
                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                            <img
                                className="rounded-t-lg h-64"
                                src={doctor1}
                                alt=""
                            />

                            <div className="p-5 text-center">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                                    Dr. Farnandoz
                                </h5>

                                <p className="font-normal text-center text-gray-700 mb-3">
                                    Cardiology
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Doctors;
