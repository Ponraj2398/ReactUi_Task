import React from "react";
import Tripadviser from '../assets/images/tripadviser.png';
import Airpnp from '../assets/images/airpnp.png';
import Expedia from '../assets/images/expedia.png';
import Booking from '../assets/images/booking.png';
import Rbitz from '../assets/images/rbitz.png';
import './Clients.css';

const Clients = () => {
    return (
        <div className="container mx-auto py-5 mt-16 flex justify-center">
            <div className="flex flex-wrap justify-center gap-8 animate__animated animate__zoomIn">
                <div className="flex justify-center items-center">
                    <img src={Tripadviser} alt="Tripadviser" className="client-trip w-full h-auto max-w-full" />
                </div>
                <div className="flex justify-center items-center">
                    <img src={Expedia} alt="Expedia" className="client-exp w-full h-auto max-w-full" />
                </div>
                <div className="flex justify-center items-center">
                    <img src={Booking} alt="Booking" className="client-booking w-full h-auto max-w-full" />
                </div>
                <div className="flex justify-center items-center">
                    <img src={Airpnp} alt="Airpnp" className="client-air w-full h-auto max-w-full" />
                </div>
                <div className="flex justify-center items-center">
                    <img src={Rbitz} alt="Rbitz" className="client-rbitz w-full h-auto max-w-full" />
                </div>
            </div>
        </div>
    );
};

export default Clients;
