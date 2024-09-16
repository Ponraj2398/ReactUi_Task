import React from "react";
import './Services.css';
import World from '../assets/images/world.png';
import Cloud from '../assets/images/cloud.png';
import Bookingimg from '../assets/images/bookingimg.png';

const Services = () => {
    return (
        <div className="overflow-x-hidden mt-16">
            <div className="container flex flex-col md:flex-row items-center gap-8 py-8 custom-order">
                <div className="w-full md:w-4/12 animate__animated animate__bounceInLeft">
                    <h4 className="text-lg font-semibold text-gray-500 service-heading">SERVICES</h4>
                    <h3 className="font-bold mt-2 text-center md:text-left service-para">
                        Our top value categories for you
                    </h3>
                </div>

                <div className="w-full md:w-8/12 flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 service-card space-y-2 animate__animated animate__rotateInDownRight">
                            <img src={World} alt="World" className="w-10 h-10 rounded-full shadow-lg" />
                            <p className="text-xl font-semibold service-card-title">Best Tour Guide</p>
                            <p className="text-gray-600 text-center service-card-para">What looked like a small patch of purple grass, above five feet.</p>
                        </div>

                        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 service-card space-y-2 animate__animated animate__rotateInDownRight">
                            <img src={Bookingimg} alt="Booking" className="w-10 h-10 rounded-full shadow-lg" />
                            <p className="text-xl font-semibold service-card-title">Easy Booking</p>
                            <p className="text-gray-600 text-center service-card-para">Square, was moving across the sand in their direction.</p>
                        </div>

                        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 service-card space-y-2 animate__animated animate__rotateInDownRight">
                            <img src={Cloud} alt="Weather" className="w-10 h-10 rounded-full shadow-lg" />
                            <p className="text-xl font-semibold service-card-title">Weather Forecast</p>
                            <p className="text-gray-600 text-center service-card-para">What looked like a small patch of purple grass, above five feet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;
