import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("/servicesApi.JSON", {})
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setServices(data);
                setLoading(false);
            });
    }, []);

    return { services, setServices, loading };
};

export default useServices;
