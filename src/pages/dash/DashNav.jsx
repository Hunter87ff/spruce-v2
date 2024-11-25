import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import configs from "../../ext/config.json";
import { Link } from 'react-router-dom';
import Home from '../../pages/Home';


const DashNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="fixed w-full z-50 transition-all duration-300">
            <nav className='align-middle py-auto'>
                <h2 className='text-2xl font-bold text-gray-400 hover:text-white'>Spruce</h2>
                <ul className='float-right align-middle'>
                    <li>
                        <Link to="/" className="text-white">Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default DashNav;