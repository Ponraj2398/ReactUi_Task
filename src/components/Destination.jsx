import React from "react";
import './Destination.css'
import Boat from '../assets/images/boat.png'
import Fish from '../assets/images/fish.png'
import Mountain from '../assets/images/mountain.png'
import { FaStar } from 'react-icons/fa';

const TopDestination = () => {
    return (
        <div className="container mx-auto py-8 top-destination">
            <div className="flex flex-wrap items-center py-8 responsive-columns">
                <div className="w-full md:w-9/12 animate__animated animate__lightSpeedInLeft">
                    <p className="text-lg font-semibold text-gray-500 dest-heading">TOP DESTINATION</p>
                    <h3 className="text-2xl font-bold mt-2 dest-para">Explore top destination</h3>
                </div>

                <div className="w-full md:w-3/12 carousel-btn space-x-4">
                    <button
                        type="button"
                        className="svg-btn relative z-30 flex items-center justify-center h-20 w-20 cursor-pointer group focus:outline-dark animate__animated animate__lightSpeedInRight"
                        data-carousel-prev
                    >
                        <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white group-hover:bg-blue-600 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
                            <svg
                                className="w-7 h-7 group-hover:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>

                    <button
                        type="button"
                        className="svg-btn relative z-30 flex items-center justify-center h-20 w-20 cursor-pointer group focus:outline-none animate__animated animate__lightSpeedInRight"
                        data-carousel-next
                    >
                        <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white dark:bg-blue-600 group-hover:bg-dark group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
                            <svg
                                className="w-7 h-7 text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="max-w-sm rounded bg-white border border-gray-200 shadow-lg overflow-hidden card animate__animated animate__zoomIn">
                    <img
                        className="h-49 w-full rounded object-cover"
                        src={Boat}
                        alt="Boat"
                    />
                    <div className="p-5">
                        <div className="flex justify-between items-center mb-2">
                            <h6 className="card-title text-xl font-semibold text-gray-900">Paradise Beach, Bantayan Island</h6>
                            <span className="card-price text-lg font-bold text-blue-600">$550.16</span>
                        </div>
                        <p className="text-gray-700 card-place">Rome, Italy</p>
                        <div className="flex items-center mt-3">
                            <span className="card-rating">4.8</span>&nbsp;&nbsp;
                            <FaStar className="mr-1 card-rating" />
                        </div>
                    </div>
                </div>

                <div className="max-w-sm rounded bg-white border border-gray-200 shadow-lg overflow-hidden card animate__animated animate__zoomIn">
                    <img
                        className="h-49 w-full rounded object-cover"
                        src={Fish}
                        alt="Fish"
                    />
                    <div className="p-5">
                        <div className="flex justify-between items-center mb-2">
                            <h6 className="card-title text-xl font-semibold text-gray-900">Ocean with full of Colors</h6>
                            <span className="card-price text-lg font-bold text-blue-600">$20.99</span>
                        </div>
                        <p className="text-gray-700 card-place">Maldives</p>
                        <div className="flex items-center mt-3">
                            <span className="card-rating">4.5</span>&nbsp;&nbsp;
                            <FaStar className="card-rating mr-1" />
                        </div>
                    </div>
                </div>

                <div className="max-w-sm rounded bg-white border border-gray-200 shadow-lg overflow-hidden card animate__animated animate__zoomIn">
                    <img
                        className="h-49 w-full rounded object-cover"
                        src={Mountain}
                        alt="Mountain"
                    />
                    <div className="p-5">
                        <div className="flex justify-between items-center mb-2">
                            <h6 className="card-title text-xl font-semibold text-gray-900">Mountain View, Above the cloud</h6>
                            <span className="card-price text-lg font-bold text-blue-600">$150.99</span>
                        </div>
                        <p className="text-gray-700 card-place">United Arab Emirates</p>
                        <div className="flex items-center mt-3">
                            <span className="card-rating">5.0</span>&nbsp;&nbsp;
                            <FaStar className="card-rating mr-1" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};
export default TopDestination;