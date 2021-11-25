import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Service from "../Service/Service";
import useDataBase from "./../../../hooks/useDataBase";

const Services = () => {
    const { services } = useDataBase();
    // const [service, setService] = useState([]);
    // useEffect(() => {
    //     fetch("./servicesApi.JSON")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setService(data);
    //         });
    // }, []);

    return (
        <>
            <Header />
            <div className="grid md:grid-cols-3 gap-4">
                {services.map((s) => (
                    <Service key={s.key} service={s}></Service>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Services;
