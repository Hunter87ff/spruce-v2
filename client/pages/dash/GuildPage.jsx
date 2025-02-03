import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Home, Trophy, Terminal, Menu, Settings, Crown } from "lucide-react"

const GuildPage = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);


    return (
        <div className="container flex flex-row">

            <div id="sidebar" className={`text-white overflow-hidden transition-all duration-200 fixed z-10 h-screen  bg-gray-800 ${isSidebarOpen ? 'w-64' : 'w-0 '}`}>
                <div className="header bg-gray-700 p-4">
                    <h2 className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>Spruce</h2>
                </div>
                <ul className="p-4 *:my-4 *:bg-gray-700 *:p-2 *:rounded-md flex-shrink-0 whitespace-nowrap">
                    <li className="flex items-center gap-2 hover:bg-gray-600 transition-colors duration-300 cursor-pointer"><Settings /> Bot Settings</li>
                    <li className="flex items-center gap-2 hover:bg-gray-600 transition-colors duration-300 cursor-pointer"><Trophy /> Events</li>
                    <li className="flex items-center gap-2 hover:bg-gray-600 transition-colors duration-300 cursor-pointer"><Terminal className="hover:text-gray-400" /> Commands</li>
                    <li className="flex items-center gap-2 hover:bg-gray-600 transition-colors duration-300 cursor-pointer"><Crown className="hover:text-yellow-500" /> Subscription</li>
                </ul>
            </div>

            <div id="content" className="flex-1 bg-gray-900 p-4 text-white">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-2xl font-bold">Guild Dashboard</h2>
                    <Menu className="hover:text-gray-400 transition-colors duration-300 cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                </div>

            </div>
        </div>
    )
}

export default GuildPage;