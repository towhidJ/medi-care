import React from "react";
import useServices from "../../../hooks/useServices";
import Banner from "../Banner/Banner";
import Department from "../Department/Department";
import Support from "../Support/Support";

const Home = () => {
    const { services } = useServices();
    return (
        <div className="w-full">
            <Banner></Banner>
            <h1 className="text-center font-bold md:text-4xl p-5  ">
                Our Service
            </h1>

            <div className="grid md:grid-cols-3 justify-center items-center gap-2 container mx-auto ">
                {services.map((service) => (
                    <div className="bg-white hover:bg-gray-100 text-center shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 px-4 ">
                        <img
                            src={service.icon}
                            alt=""
                            className="mx-auto p-2 "
                        />
                        <h1 className="text-xl font-medium ">{service.name}</h1>
                        <h5>{service.description.slice(0, 50)}</h5>

                        <button className="px-10 py-2 bg-red-700 rounded m-5 text-white font-medium">
                            Details
                        </button>
                    </div>
                ))}
            </div>

            <Support></Support>
            <Department></Department>
        </div>
    );
};

export default Home;
