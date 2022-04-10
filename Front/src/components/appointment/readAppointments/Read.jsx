import Nav from '../Nav';
import ModifyForm from './ModifyForm';
import axios from 'axios';
import {useState, useEffect} from 'react';


const Read = () => {
    const currentId = localStorage.getItem('currentId');
    const [appointments, setAppointments] = useState([]);
    const [appointment, setAppointment] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [callUpdate, setCallUpdate] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost/cabinet_dentaire_brief-6/appointments/getAll/${currentId}`)
        .then(res => {
            if(res.data.length > 0){
                setAppointments(res.data);
                setIsLoading(false);
            }
        })
        .catch(err => console.log(err));

    }, [isLoading]);

    const updateAppointment = appointmentUpdate => {
        setAppointment(appointmentUpdate);
        setCallUpdate(true);
    }

    const deleteAppointment = appointmentId => {
        axios.get(`http://localhost/cabinet_dentaire_brief-6/appointments/delete/${appointmentId}/${currentId}`)
        .then(response => {
            console.log(response.data.message);
            setAppointments(appointments.filter(appointment => appointment.appointment_id !== appointmentId));
        })
    }

    return (
        <div className="">
            {(callUpdate) && (<ModifyForm appointmentId={appointment.appointment_id} description={appointment.description} date={appointment.date} time={appointment.time} />)}
            <Nav />
            <section className="container mx-auto p-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                    <tr
                        className="
                        text-md
                        font-semibold
                        tracking-wide
                        text-left text-gray-900
                        bg-gray-100
                        uppercase
                        border-b border-gray-600
                        "
                    >
                        <th id="disflex" className="px-4 py-3">Description</th>
                        <th id="disflex" className="px-4 py-3">Date</th>
                        <th id="disflex" className="px-4 py-3">Time</th>
                        <th id="disflex" className="px-4 py-3">Action</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">

                        {
                            (appointments.length === 0) ? (<tr className='text-center bg-red-200'><td>No appointments </td></tr>) : appointments.map(appointment => {
                                return (
                                    <tr key={appointment.date+appointment.time}>
                                        <td className="px-4 py-3">{appointment.description}</td>
                                        <td className="px-4 py-3">{appointment.date}</td>
                                        <td className="px-4 py-3">{appointment.time}</td>
                                        <td className="px-4 py-3">
                                            <button onClick={() => {updateAppointment(appointment)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded-md">
                                                Update
                                            </button>
                                            <button onClick={() => {deleteAppointment(appointment.appointment_id)}} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded-md">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    )
                                })
                            }

                    
                    </tbody>
                </table>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Read;






