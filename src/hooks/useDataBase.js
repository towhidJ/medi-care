import { useContext } from "react";
import { ServiceContext } from "../contexts/ServiceProvider";

const useDataBase = () => {
    return useContext(ServiceContext);
};

export default useDataBase;
