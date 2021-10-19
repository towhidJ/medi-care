import React from "react";
import error from "../../images/404.jpg";
const NotFound = () => {
    return (
        <div className="container mx-auto text-center">
            <div
                className="flex justify-center items-center"
                style={{ padding: "120px" }}
            >
                <div>
                    <img src={error} alt="Error" style={{ height: "100px" }} />
                </div>
                <div>
                    <h1>404 Page Not Found</h1>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
