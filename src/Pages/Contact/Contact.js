import React from "react";

const Contact = () => {
    return (
        <div className="mt-5 pt-5" style={{ backgroundColor: "aliceblue" }}>
            <div className="text-center container mx-auto">
                <p
                    style={{
                        color: "darkgreen",
                        fontWeight: "900",
                        fontSize: "20px",
                    }}
                >
                    Contact Information
                </p>
                <h1>Let's Talk About For Your Health</h1>
                <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                    odio sit amet nibh vulputate cursus a sit amet mauris.
                </p>
            </div>
            <div className="md:flex  md:justify-around md:items-center skew-y-5">
                <div className="mb-3 shadow-lg px-10 py-3">
                    <div className=" md:flex justify-between">
                        <div className="mr-4">
                            <h1>
                                <i className="fas fa-phone    "></i>
                            </h1>
                        </div>
                        <div>
                            <h5>Make A Call</h5>
                            <p>Let’s Talk with our Experts</p>
                        </div>
                    </div>
                    <div style={{ fontSize: "24px" }} className="font-medium">
                        <p>+8801521401825</p>
                        <p>Mon - Fri: 09.00 to 17.00</p>
                    </div>
                </div>

                <div className="mb-3 shadow-lg px-10 py-3">
                    <div className="  md:flex justify-between">
                        <div>
                            <h1 className="mr-4">
                                <i className="fa fa-location-arrow"></i>
                            </h1>
                        </div>
                        <div>
                            <h5>Location</h5>
                            <p>Visit Our Office</p>
                        </div>
                    </div>
                    <div style={{ fontSize: "24px" }} className="font-medium">
                        <p>Chittagong Bangladesh</p>
                    </div>
                </div>

                <div className="mb-3 shadow-lg px-10 py-3">
                    <div className="  md:flex justify-between">
                        <div>
                            <h1 className="me-4">
                                <i className="fas fa-mail-bulk    "></i>
                            </h1>
                        </div>
                        <div>
                            <h5>Send An Email</h5>
                            <p>Don’t Hesitate to Email</p>
                        </div>
                    </div>
                    <div style={{ fontSize: "24px" }} className="fw-medium">
                        <p>info@shopbyte.com.bd</p>
                        <p>support@shopbyte.com.bd</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
