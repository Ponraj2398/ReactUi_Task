import React from 'react';
import Clients from '../components/Clients';
import Destination from '../components/Destination';
import Services from '../components/Services';
import TravelPoints from '../components/TravelPoints';
import Features from '../components/Features';
import bagicon from '../assets/images/Vector.svg';
import playicon from '../assets/images/playicon.png';
import homeimg from '../assets/images/homeimg.png';
import Ellips from '../assets/images/ellipse.png';
import './Home.css';

const Home = () => {
    return (
        <div className="relative overflow-x-hidden">
            <div className="container py-4 flex flex-col md:flex-row items-center custom-order">
                <div className="md:w-5/12 mb-8 md:mb-0 justify-center first-col">
                    <div className='flex justify-start explore-main'>
                        <div className="flex items-center gap-x-2 explore animate__animated animate__rubberBand">
                            <span>Explore the world!</span> <img src={bagicon} alt="NA" className="w-5 h-5" loading="lazy" />
                        </div>
                    </div>

                    <h1 className="text-2xl md:text-4xl font-bold mt-4 explore-headline animate__animated animate__backInLeft">
                        Travel <span>top destination</span> of the world
                    </h1>
                    <p className="mt-4 flex justify-center explore-headline-para animate__animated animate__backInLeft">
                        We always make our customers happy by providing as many choices as possible.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center mt-6">
                        <div className='w-full md:w-6/12 flex items-center justify-end'>
                            <button className="w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition explore-btn animate__animated animate__backInUp">
                                Get Started
                            </button>
                        </div>
                        <div className='w-full md:w-6/12 demo-btn flex items-center justify-start ml-3'>
                            <button className="w-full flex items-center justify-center text-blue-500 explore-demo-btn animate__animated animate__backInUp">
                                <img src={playicon} alt="NA" className="w-6 h-6" loading="lazy" />
                                <strong>Watch Demo</strong>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:w-7/12 flex justify-center second-col animate__animated animate__backInRight">
                    <img src={homeimg} alt="NA" className="w-full h-auto max-w-full" />
                </div>
            </div>
            <div className="relative">
                <Clients />
                <img
                    src={Ellips}
                    alt="ellipse"
                    className="ellipse absolute -z-10"
                    loading="lazy"
                />
                <Services />
            </div>
            <Destination />
            <TravelPoints />
            <Features />
        </div>
    );
};

export default Home;
