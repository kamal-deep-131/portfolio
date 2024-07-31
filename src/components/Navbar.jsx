import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const myBlack = "#242424"

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            closeMenu();
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="fixed w-full bg-myBg text-myBlack shadow-md font-otterco">
            <div className="container mx-auto flex justify-between items-center p-4">
                <a href="#" className="text-xl font-bold text-myBlack z-10">Logo</a>
                <div className="md:hidden z-10" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={24} color={myBlack} onClick={closeMenu} /> : <FaBars size={24} color={myBlack} />}
                </div>
                <ul className={`fixed md:static top-0 left-0 w-full md:w-auto h-full md:h-auto bg-myBg md:bg-transparent flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
                    <li className="mt-20 md:mt-0">
                        <a href="#home" className="text-lg text-myBlack" onClick={closeMenu}>Home</a>
                    </li>
                    <li>
                        <a href="#about" className="text-lg text-myBlack" onClick={closeMenu}>About</a>
                    </li>
                    <li>
                        <a href="#services" className="text-lg text-myBlack" onClick={closeMenu}>Services</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-lg text-myBlack" onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
