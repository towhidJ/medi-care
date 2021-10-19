import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
    const { name, icon, img, description, key } = props.service;
    console.log(props.service);
    return (
        <div className="flex justify-center items-center mt-5">
            <div className="max-w-lg mx-auto">
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                    <img className="rounded-t-lg" src={img} alt="" />

                    <div className="p-5">
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                            {name}
                        </h5>

                        <p className="font-normal text-gray-700 mb-3">
                            {description.slice(0, 100)}
                        </p>
                        <Link
                            to={`service-details/${key}`}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                            href="#"
                        >
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
