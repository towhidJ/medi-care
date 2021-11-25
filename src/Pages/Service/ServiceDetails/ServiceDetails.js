import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import useDataBase from "./../../../hooks/useDataBase";
import "./ServiceDetails.css";
let data;
const ServiceDetails = () => {
    // const [loading, setLoading] = useState(true);
    const { services, loading } = useDataBase();
    const { id } = useParams();

    if (loading) {
        return (
            <div className=" flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        );
    } else {
        data = services.filter((x) => x.key === parseInt(id));
    }
    const { name, img, description, intensivist, eventHours } = data[0];
    return (
        <>
            <Header />
            <div>
                <div className="grid md:grid-cols-3 md:justify-center md:items-start ">
                    <div className="md:col-span-2 px-5 md:pl-24 space-y-4 mt-2">
                        <img src={img} alt={id} className="w-full h-96" />
                        <h1 className="text-5xl">{name} </h1>
                        <p className="text-justify">{description}</p>
                        <div>
                            <h2 className="text-3xl">Like this Service</h2>
                            <div className="flex space-x-3">
                                <a
                                    className="text-blue-600"
                                    href="http://facebook.com"
                                >
                                    Facebook
                                </a>
                                <a
                                    className="text-blue-600"
                                    href="http://twitter.com"
                                >
                                    Twitter
                                </a>
                                <a
                                    className="text-blue-600"
                                    href="http://google.com"
                                >
                                    Google
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg p-5 m-4 space-y-10">
                        <div className="service-details">
                            <h1>Head Of Department</h1>
                            <div className="service-details-content">
                                <h5>Intensivist</h5>
                                <h5>{intensivist}</h5>
                            </div>
                        </div>
                        <div className="service-details">
                            <h1>Event Hours</h1>
                            <div className="service-details-content">
                                <h5>{eventHours}</h5>
                                <h5>Attending physician</h5>
                            </div>
                        </div>
                        <div className="service-details">
                            <h1>Contacts</h1>
                            <div className="service-details-content">
                                <h5>Address</h5>
                                <h5>Karnaphuli,Chittagong</h5>
                            </div>
                            <div className="service-details-content">
                                <h5>Email</h5>
                                <h5>towhid@mail.com</h5>
                            </div>
                            <div className="service-details-content">
                                <h5>Call us</h5>
                                <h5>+88018XXXXXXXX</h5>
                            </div>
                            <Link
                                to="/appointment"
                                className="mt-2 px-5 py-3 bg-purple-600 rounded text-center text-white font-bold "
                            >
                                Appointment Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ServiceDetails;
