import React, { useState } from "react";
import logo from '../assets/images/Frame1.png';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import './Footer.css';
import { FaAngleDown } from "react-icons/fa6";

const Footer = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="container mx-auto py-8 animate__animated animate__flipInX">
            <div className="footer-grid">
                <div className="footer-column footer-logo">
                    <div className="footer-one"><img src={logo} alt="Logo" className="mb-4" /></div>
                    <p className="text-gray-600 mb-4 footer-para footer-one">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC.
                    </p>
                    <ul className="flex space-x-4">
                        <li className="text-blue-800"><FaFacebook size={24} /></li>
                        <li className="text-blue-800"><FaTwitter size={24} /></li>
                        <li className="text-blue-800"><FaInstagram size={24} /></li>
                    </ul>
                </div>

                <div className="footer-column footer-conatcts">
                    <h6 className="text-lg font-semibold mb-4 footer-heading">Company</h6>
                    <ul>
                        <li className="text-gray-600 mb-2 footer-list">About</li>
                        <li className="text-gray-600 mb-2 footer-list">Career</li>
                        <li className="text-gray-600 mb-2 footer-list">Mobile</li>
                    </ul>
                </div>

                <div className="footer-column footer-conatcts">
                    <h6 className="text-lg font-semibold mb-4 footer-heading">Contact</h6>
                    <ul>
                        <li className="text-gray-600 mb-2 footer-list">Why Travlog?</li>
                        <li className="text-gray-600 mb-2 footer-list">Partner with us</li>
                        <li className="text-gray-600 mb-2 footer-list">FAQ's</li>
                        <li className="text-gray-600 mb-2 footer-list">Blog</li>
                    </ul>
                </div>

                <div className="footer-column footer-conatcts">
                    <h6 className="text-lg font-semibold mb-4 footer-heading">Meet Us</h6>
                    <ul>
                        <li className="text-gray-600 mb-2 footer-list">+00 92 1234 56789</li>
                        <li className="text-gray-600 mb-2 footer-list">info@travlog.com</li>
                        <li className="text-gray-600 mb-2 footer-list">205. R Street, New York</li>
                        <li className="text-gray-600 mb-2 footer-list">BD23200</li>
                    </ul>
                </div>
            </div>

            <div className="accordion-conatiner">
                <div className="accordion-item">
                    <button
                        className="accordion-button flex items-center justify-between w-full"
                        onClick={() => toggleSection('company')}
                        aria-expanded={activeSection === 'company'}
                        aria-controls="company-content"
                    >
                        <span>Company</span>
                        <FaAngleDown />
                    </button>
                    <div
                        id="company-content"
                        className={`accordion-content ${activeSection === 'company' ? 'open' : ''}`}
                        role="region"
                        aria-labelledby="company"
                    >
                        <ul>
                            <li className="text-gray-600 mb-2 footer-list">About</li>
                            <li className="text-gray-600 mb-2 footer-list">Career</li>
                            <li className="text-gray-600 mb-2 footer-list">Mobile</li>
                        </ul>
                    </div>
                </div>
                <div className="accordion-item">
                    <button
                        className="accordion-button flex items-center justify-between w-full"
                        onClick={() => toggleSection('contact')}
                        aria-expanded={activeSection === 'contact'}
                        aria-controls="contact-content"
                    >
                        <span>Contact</span>
                        <FaAngleDown />
                    </button>
                    <div
                        id="contact-content"
                        className={`accordion-content ${activeSection === 'contact' ? 'open' : ''}`}
                        role="region"
                        aria-labelledby="contact"
                    >
                        <ul>
                            <li className="text-gray-600 mb-2 footer-list">Why Travlog?</li>
                            <li className="text-gray-600 mb-2 footer-list">Partner with us</li>
                            <li className="text-gray-600 mb-2 footer-list">FAQ's</li>
                            <li className="text-gray-600 mb-2 footer-list">Blog</li>
                        </ul>
                    </div>
                </div>
                <div className="accordion-item">
                    <button
                        className="accordion-button flex items-center justify-between w-full"
                        onClick={() => toggleSection('meet')}
                        aria-expanded={activeSection === 'meet'}
                        aria-controls="meet-content"
                    >
                        <span>Meet Us</span>
                        <FaAngleDown />
                    </button>
                    <div
                        id="meet-content"
                        className={`accordion-content ${activeSection === 'meet' ? 'open' : ''}`}
                        role="region"
                        aria-labelledby="meet"
                    >
                        <ul>
                            <li className="text-gray-600 mb-2 footer-list">+00 92 1234 56789</li>
                            <li className="text-gray-600 mb-2 footer-list">info@travlog.com</li>
                            <li className="text-gray-600 mb-2 footer-list">205. R Street, New York</li>
                            <li className="text-gray-600 mb-2 footer-list">BD23200</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
