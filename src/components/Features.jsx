import React from "react";
import backgroundimg from '../assets/images/background.png';
import Locationimg from '../assets/images/locationimg.png';
import Calenderimg from '../assets/images/calenderimg.png';
import Discountimg from '../assets/images/discountimg.png';
import './Features.css';

const Features = () => {
    return (
        <div className="container mx-auto py-8 mt-28">
            <div className="responsive-container">
                <div className="responsive-column">
                    <div className="responsive-text animate__animated animate__fadeInLeftBig">
                        <p className="text-lg font-semibold mb-2 feature-heading">KEY FEATURES</p>
                        <h3 className="font-bold mb-4 feature-para">We offer the best services</h3>
                        <p className="mb-8 keyfeature-para">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                        </p>
                    </div>
                    <div className="flex items-center mb-4 mt-8">
                        <img src={Locationimg} className="w-20 h-20 mr-4 animate__animated animate__fadeInTopLeft" alt="location" />
                        <div className="animate__animated animate__fadeInTopRight">
                            <p className="font-semibold feature-topic"><strong>We offer the best services</strong></p>
                            <p className="text-gray-600">Lorem Ipsum is not simply random text</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-4 mt-8">
                        <img src={Calenderimg} className="w-20 h-20 mr-4 animate__animated animate__fadeInTopLeft" alt="calendar" />
                        <div className="animate__animated animate__fadeInTopRight">
                            <p className="font-semibold feature-topic"><strong>Schedule your trip</strong></p>
                            <p className="text-gray-600">It has roots in a piece of classical</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-8">
                        <img src={Discountimg} className="w-20 h-20 mr-4 animate__animated animate__fadeInTopLeft" alt="discount" />
                        <div className="animate__animated animate__fadeInTopRight">
                            <p className="font-semibold feature-topic"><strong>Get discounted coupons</strong></p>
                            <p className="text-gray-600">Lorem Ipsum is not simply random text</p>
                        </div>
                    </div>
                </div>
                <div className="responsive-column animate__animated animate__fadeInRightBig">
                    <img src={backgroundimg} alt="background" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Features;
