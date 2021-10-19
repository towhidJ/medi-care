import React, { createContext } from "react";
import useServices from "./../hooks/useServices";

export const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
    const sContext = useServices();
    return (
        <ServiceContext.Provider value={sContext}>
            {children}
        </ServiceContext.Provider>
    );
};

export default ServiceProvider;
