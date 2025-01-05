import { useState } from "react";
import { Link } from "react-router-dom";

const Newbar = () => {
    const _onboard_text = "Dashboard"
    const links = [
        { text: "Home", url: "/" },
        { text: "Tournaments", url: "#" },
        { text: "Features", url: "#features" },
        { text: "Pricing", url: "#" },
    ]

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav id="navbar" className="bg-neutral-900 fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex-shrink-0">
                        <Link to={'/'}>
                        <span className="text-2xl font-bold text-emerald-500 cursor-pointer">Spruce</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {links.map((val, index) => (
                                <a href={val.url} key={index} className="text-gray-300 hover:text-emerald-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">{val.text}</a>
                            ))}

                            <button className="bg-emerald-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-600 transition-colors">{_onboard_text}</button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button id="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div id="mobile-menu" className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-neutral-800`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {links.map((val, index) => (
                        <a href={val.url} key={index}
                            className="text-gray-300 hover:text-emerald-500 block px-3 py-2 rounded-md text-base font-medium">{val.text}</a>

                    ))}

                    <button
                        className="w-full bg-emerald-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-600 transition-colors mt-4">Dashboard</button>
                </div>
            </div>
        </nav>
    )
}

export default Newbar;