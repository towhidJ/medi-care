import React from "react";
import { Link } from "react-router-dom";
import app from "../../../images/app.jpg";
const Footer = () => {
    return (
        <div>
            <footer className=" bg-black p-5 mt-5">
                <div className="container mx-auto md:flex justify-between space-x-2">
                    <div>
                        <div className="my-2">
                            <Link
                                className="text-decoration-none text-white mx-2"
                                to="/"
                            >
                                Home
                            </Link>
                            <Link
                                className="text-decoration-none text-white mx-2"
                                to="/services"
                            >
                                Service
                            </Link>
                        </div>
                        <div className="my-2">
                            <Link
                                className="text-decoration-none text-white mx-2"
                                to="/team"
                            >
                                Team
                            </Link>
                            <Link
                                className="text-decoration-none text-white mx-2"
                                to="/contact"
                            >
                                Contact
                            </Link>
                            <Link
                                className="text-decoration-none text-white mx-2"
                                to="/tearms"
                            >
                                Tearms & Service
                            </Link>
                            <Link
                                className="text-decoration-none text-white me-2"
                                to="/privacy"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                    <div className="me-5">
                        <h5 className="text-white">Get The App</h5>
                        <img
                            className="w-25"
                            height="80px"
                            width="135px"
                            src={app}
                            alt=""
                        />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
