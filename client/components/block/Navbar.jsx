import { useState } from "react";
import { Link } from "react-router-dom";
import { scrollToElement } from "../../ext/helper.jsx";

const Newbar = () => {
    const _onboard_text = "Dashboard"
    const links = [
        { text: "Home", url: "/" },
        { text: "About", url: "/about" },
        { text: "Features", url: "/#features", callback: ()=>{scrollToElement('features')} },
        { text: "Pricing", url: "/pricing" },
    ]

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav id="navbar" className="bg-neutral-900/50 backdrop-blur-sm fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex-shrink-0">
                        <Link to='/'>
                            <span className="text-2xl font-bold text-emerald-400 hover:text-emerald-600 cursor-pointer">Spruce</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {links.map((val, index) => (
                                <Link onClick={()=>{val.callback?.()}} to={val.url} key={index} className="text-gray-300 hover:text-emerald-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">{val.text}</Link>
                            ))}
                            <Link to={'/servers'}>
                                <button className="bg-inherit text-white px-4 py-2 rounded-md text-sm font-medium hover:text-emerald-500">{_onboard_text}</button>
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button id="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div id="mobile-menu" className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-neutral-800`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {links.map((val, index) => (
                        <Link to={val.url} key={index}
                            className="text-gray-300 hover:text-emerald-500 block px-3 py-2 rounded-md text-base font-medium">{val.text}</Link>
                    ))}
                    <Link to={'/servers'}>
                        <button className="w-full bg-emerald-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-600 transition-colors mt-4">Dashboard</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Newbar;