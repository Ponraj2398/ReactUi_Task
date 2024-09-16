import React, { useState } from 'react';
import logo from '../assets/images/Frame1.png';
import './Navbar.css'

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="container mx-auto py-5 flex items-center justify-between">
            <img src={logo} className="w-36 h-auto animate__animated animate__bounce" alt="logo" />

            <div className="flex justify-start md:justify-center items-center lg:hidden">
                <button
                    className="block text-blue-600 md:mr-4 animate__animated animate__bounce"
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    aria-controls="mobile-menu"
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Toggle mobile menu"
                >
                    <svg
                        className="w-8 h-8 animate__animated animate__bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        ></path>
                    </svg>
                </button>

                <div className="hidden sm:flex space-x-4">
                    <button className="px-4 py-2 text-black rounded-full hover:text-white transition login-btn animate__animated animate__bounce">Log In</button>
                    <button className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition signup-btn animate__animated animate__bounce">Sign Up</button>
                </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
                <ul className="flex space-x-8">
                    <li className="hover:text-blue-600 text-gray-600 cursor-pointer active animate__animated animate__bounce">Home</li>
                    <li className="hover:text-blue-600 text-gray-600 cursor-pointer animate__animated animate__bounce">Discover</li>
                    <li className="hover:text-blue-600 text-gray-600 cursor-pointer animate__animated animate__bounce">Special Deals</li>
                    <li className="hover:text-blue-600 text-gray-600 cursor-pointer animate__animated animate__bounce">Contact</li>
                </ul>
            </nav>
            <div className="hidden lg:flex items-center space-x-4">
                <button className="px-4 py-2 text-black rounded-full hover:text-white transition login-btn animate__animated animate__bounce">Log In</button>
                <button className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition signup-btn animate__animated animate__bounce">Sign Up</button>
            </div>

            {isMobileMenuOpen && (
                <nav className="lg:hidden bg-white border-t border-gray-200">
                    <ul className="flex flex-col items-center py-4 space-y-4">
                        <li className="hover:text-blue-600 text-gray-600 cursor-pointer active animate__animated animate__bounce">Home</li>
                        <li className="hover:text-blue-600 text-gray-600 cursor-pointer animate__animated animate__bounce">Discover</li>
                        <li className="hover:text-blue-600 text-gray-600 cursor-pointer animate__animated animate__bounce">Special Deals</li>
                        <li className="hover:text-blue-600 text-gray-600 cursor-pointer animate__animated animate__bounce">Contact</li>
                    </ul>
                    <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
                        <button className="w-11/12 px-4 py-2 text-black rounded-full hover:text-white transition login-btn animate__animated animate__bounce">Log In</button>
                        <button className="w-11/12 px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition signup-btn animate__animated animate__bounce">Sign Up</button>
                    </div>
                </nav>
            )}
        </div>

    );
};

export default Navbar;
