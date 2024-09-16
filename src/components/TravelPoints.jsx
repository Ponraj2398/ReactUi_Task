import React, { useEffect } from 'react';
import Travelimg from '../assets/images/travelimg.png';
import './TravelPoints.css';

const TravelPoints = () => {

    useEffect(() => {
        const animateCounter = (className, target) => {
            try {
                if (typeof target !== 'number' || target <= 0) {
                    console.error(`Invalid target value for ${className}: ${target}`);
                    return;
                }
    
                const counter = document.querySelector(className);
    
                if (!counter) {
                    console.error(`Element with class ${className} not found.`);
                    return;
                }
    
                const increment = Math.ceil(target / 100);
                let count = 0;
    
                const updateCount = () => {
                    try {
                        count += increment;
                        if (count < target) {
                            counter.textContent = count;
                            setTimeout(updateCount, 20);
                        } else {
                            counter.textContent = target;
                        }
                    } catch (error) {
                        console.error(`Error updating counter for ${className}:`, error);
                    }
                };
    
                updateCount();
            } catch (error) {
                console.error(`Error in animateCounter for ${className}:`, error);
            }
        };
    
        animateCounter('.count', 20);
        animateCounter('.count1', 100);
        animateCounter('.count2', 7);
        animateCounter('.count3', 2);
    }, []);
    

    return (
        <div className="travel-container flex flex-col md:flex-row items-center gap-6 mt-20 px-4">
            <div className="travel-image md:w-7/12 animate__animated animate__fadeInLeftBig">
                <img src={Travelimg} alt="Travel" className="w-full h-auto" />
            </div>

            <div className="travel-text md:w-5/12">
                <div className='flex flex-col animate__animated animate__fadeInRightBig'>
                    <p className="responsive-text text-lg font-semibold text-gray-700 mb-3 travel-heading">
                        TRAVEL POINT
                    </p>
                    <h3 className="responsive-text text-2xl font-bold mt-5 travel-para">
                        We help you find your dream location
                    </h3>
                    <p className="responsive-text mt-5 travelpoint-para">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC.
                    </p>
                </div>
                <div className="mt-10">
                    <div className="travel-stats-container grid grid-cols-1 sm:grid-cols-2 gap-4 animate__animated animate__zoomInDown">
                        <div className="p-4">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
                                <h2 className="text-4xl font-bold mb-2"><span className="count">0</span><sup className="text-xl count">+</sup></h2>
                                <h4 className="text-lg font-semibold">Holiday Package</h4>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="bg-white border rounded-lg shadow-md p-6 text-center">
                                <h2 className="text-4xl font-bold mb-2"><span className="count1">0</span></h2>
                                <h4 className="text-lg font-semibold">Luxury Hotel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="bg-white border rounded-lg shadow-md p-6 text-center">
                                <h2 className="text-4xl font-bold mb-2"><span className="count2">0</span></h2>
                                <h4 className="text-lg font-semibold">Premium Airlines</h4>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
                                <h2 className="text-4xl font-bold mb-2"><span className="count3">0</span><sup className="text-xl count3">k+</sup></h2>
                                <h4 className="text-lg font-semibold">Happy Customer</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelPoints;
