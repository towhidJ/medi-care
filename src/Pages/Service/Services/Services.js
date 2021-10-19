import React from "react";
import Service from "../Service/Service";
import useServices from "./../../../hooks/useServices";

const Services = () => {
    const { services } = useServices();
    // const [service, setService] = useState([]);
    // useEffect(() => {
    //     fetch("./servicesApi.JSON")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setService(data);
    //         });
    // }, []);

    return (
        <div className="grid md:grid-cols-3 gap-4">
            {services.map((s) => (
                <Service key={s.key} service={s}></Service>
            ))}
        </div>
    );
};

export default Services;
