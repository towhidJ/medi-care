import React from "react";
import "./Support.css";

const Support = () => {
    return (
        <div className="my-10 container mx-auto px-12">
            <h1 className="text-center text-4xl mb-8 font-bold uppercase">
                Why Choose Neonal?
            </h1>
            <div className="grid md:grid-cols-2 justify-center items-center gap-4">
                <div className="support">
                    <i className="fas fa-user-md"></i>
                    <h1>Professional Staff</h1>
                </div>
                <div className="support">
                    <i className="fas fa-hand-holding-usd"></i>
                    <h1>Affordable Prices</h1>
                </div>
                <div className="support">
                    <i className="fab fa-cc-amazon-pay"></i>
                    <h1>Insurance Partners</h1>
                </div>
                <div className="support">
                    <i className="fas fa-headset"></i>
                    <h1>24/07 Support</h1>
                </div>
                <div className="support">
                    <i className="fas fa-ambulance"></i>
                    <h1>Emergency Service</h1>
                </div>
                <div className="support">
                    <i className="fas fa-bullhorn"></i>
                    <h1>Online Consultancy</h1>
                </div>
            </div>
        </div>
    );
};

export default Support;
