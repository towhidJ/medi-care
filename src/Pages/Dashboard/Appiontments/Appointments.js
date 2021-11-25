import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./Appointments.css";
const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [st, setSt] = useState(0);
    const [loadorder, setLoadOrder] = useState(true);
    const { user, admin } = useAuth();

    const emaila = {
        email: user.email,
    };
    useEffect(() => {
        setLoadOrder(true);
        if (admin) {
            fetch("https://salty-fortress-41861.herokuapp.com/appointments")
                .then((res) => res.json())
                .then((data) => {
                    setAppointments(data);
                    setSt(0);
                    setLoadOrder(false);
                });
        } else {
            fetch(
                "https://salty-fortress-41861.herokuapp.com/appointments/byEmail",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(emaila),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    setAppointments(data);
                    setSt(0);
                    setLoadOrder(false);
                });
        }
    }, [st]);

    const changHandler = (data, id) => {
        console.log(data);
        fetch(`https://salty-fortress-41861.herokuapp.com/status/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: data }),
        })
            .then((res) => res.json())
            .then((data) => {
                setSt(1);
                alert("Status Updatetd successfully");
            });
    };

    const deleteHandler = (id) => {
        if (
            window.confirm("Are you sure you want to cancel this appointment?")
        ) {
            // eslint-disable-next-line no-lone-blocks
            {
                fetch(
                    `https://salty-fortress-41861.herokuapp.com/appointments/${id}`,
                    {
                        method: "Delete",
                        headers: { "Content-Type": "application/json" },
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        setSt(1);

                        alert("appointment Delete Success!");
                    });
            }
        }
    };

    return (
        <div className=" px-5 py-5 w-auto">
            <table className="border-collapse w-full">
                <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Patient Name
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Appointment Date
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Appointment Time
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Doctor
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Message
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Status
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <>
                            <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1  text-xs font-bold uppercase">
                                        Patient Name
                                    </span>
                                    <span className="mt-5 ">
                                        {user?.displayName}
                                    </span>
                                </td>
                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                        Appointment Date
                                    </span>
                                    {appointment.date}
                                </td>
                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                        Appointment Time
                                    </span>
                                    {appointment.time}
                                </td>
                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                        Doctor
                                    </span>
                                    {appointment.doctor}
                                </td>
                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                        Doctor
                                    </span>
                                    {appointment.message}
                                </td>
                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                        Status
                                    </span>

                                    {!admin ? (
                                        <span
                                            className={
                                                appointment.status === "Pending"
                                                    ? "rounded bg-yellow-300 py-1 px-3 text-xs font-bold"
                                                    : appointment.status ===
                                                      "OnGoing"
                                                    ? "rounded bg-yellow-500 py-1 px-3 text-xs font-bold"
                                                    : appointment.status ===
                                                      "Processing"
                                                    ? "rounded bg-yellow-700 py-1 px-3 text-xs font-bold"
                                                    : appointment.status ===
                                                      "Shipped"
                                                    ? "rounded bg-green-200 py-1 px-3 text-xs font-bold"
                                                    : "rounded bg-green-400 py-1 px-3 text-xs font-bold"
                                            }
                                        >
                                            {appointment?.status}
                                        </span>
                                    ) : appointment.status !== "Complete" ? (
                                        <select
                                            className={
                                                appointment.status === "Pending"
                                                    ? "rounded bg-yellow-300 py-1 px-3 text-xs font-bold"
                                                    : appointment.status ===
                                                      "OnGoing"
                                                    ? "rounded bg-yellow-500 py-1 px-3 text-xs font-bold"
                                                    : appointment.status ===
                                                      "Processing"
                                                    ? "rounded bg-yellow-700 py-1 px-3 text-xs font-bold"
                                                    : appointment.status ===
                                                      "Shipped"
                                                    ? "rounded bg-green-200 py-1 px-3 text-xs font-bold"
                                                    : "rounded bg-green-400 py-1 px-3 text-xs font-bold"
                                            }
                                            onChange={(e) =>
                                                changHandler(
                                                    e.target.value,
                                                    appointment._id
                                                )
                                            }
                                        >
                                            <option
                                                className="pending"
                                                value="Pending"
                                            >
                                                {appointment.status}
                                            </option>
                                            <option
                                                className="processing"
                                                value="Processing"
                                            >
                                                Processing
                                            </option>
                                            <option
                                                className="ongoing"
                                                value="OnGoing"
                                            >
                                                On Going
                                            </option>
                                            <option
                                                className="shipped"
                                                value="Shipped"
                                            >
                                                Shipped
                                            </option>
                                            <option
                                                className="complete"
                                                value="Complete"
                                            >
                                                Complete
                                            </option>
                                        </select>
                                    ) : (
                                        <span className="rounded bg-green-300 py-1 px-3 text-xs font-bold">
                                            {appointment?.status}
                                        </span>
                                    )}
                                </td>
                                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                        Actions
                                    </span>

                                    <button
                                        onClick={() =>
                                            deleteHandler(appointment._id)
                                        }
                                        className="text-blue-400 hover:text-blue-600 underline pl-6"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Appointments;
