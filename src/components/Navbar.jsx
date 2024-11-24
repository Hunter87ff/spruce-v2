import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Features',
      dropdownItems: ['Tournament System', 'Scrim Management', 'Music Player', 'Moderation', 'Role Management', 'Tickets']
    },
    { label: 'Commands' },
    { label: 'Documentation' },
    { label: 'Support' }
  ];

  const toggleMobileDropdown = (index) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/">
            <div className="flex-shrink-0 flex items-center cursor-pointer">
                {/* <Bot className="h-8 w-8 text-indigo-500" /> */}
                <img src="/assets/img/spruce.png" alt="" className='max-h-6 rounded-full'/>
                <span className="ml-2 text-xl font-bold text-white">Spruce</span>
            </div>
        </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
                  {item.label}
                  {item.dropdownItems && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
                
                {item.dropdownItems && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900/90 backdrop-blur-lg ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 invisible group-hover:visible">
                    <div className="py-1">
                      {item.dropdownItems.map((dropdownItem, dropIndex) => (
                        <a
                          key={dropIndex}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50"
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
              Add to Discord
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/90 backdrop-blur-lg">
          {navItems.map((item, index) => (
            <div key={index} className="space-y-1">
              <button 
                onClick={() => item.dropdownItems && toggleMobileDropdown(index)}
                className="w-full text-gray-300 hover:text-white hover:bg-gray-700 flex justify-between items-center px-3 py-2 rounded-md text-base font-medium"
              >
                <span>{item.label}</span>
                {item.dropdownItems && (
                  mobileDropdowns[index] ? 
                  <ChevronDown className="h-4 w-4" /> : 
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {item.dropdownItems && mobileDropdowns[index] && (
                <div className="pl-4 space-y-1 bg-gray-800/50 rounded-md ml-2">
                  {item.dropdownItems.map((dropdownItem, dropIndex) => (
                    <a
                      key={dropIndex}
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      {dropdownItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
            Add to Discord
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;