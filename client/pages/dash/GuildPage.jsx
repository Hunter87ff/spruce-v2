import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Home, Trophy, Terminal, Menu, Settings, Crown } from "lucide-react"

const GuildPage = () => {
    const navigate = useNavigate();
    const tabs = ["Bot Settings", "Events", "Commands", "Subscription"]
    const [isMobile, setisMobile] = useState(window.innerWidth < 768);
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        async function windowManage() {
            window.onresize = () => {
                setisMobile(window.innerWidth < 768)
            }
        }
        windowManage(), []
    })


    return (
        <div className="container flex-row flex min-w-screen">
            <div id="sidebar" className={`fixed text-white overflow-hidden transition-all duration-200  z-10 h-screen  bg-gray-800 ${isSidebarOpen || !isMobile ? 'w-72' : 'w-0 '}`}>
                <div className="header bg-gray-700 p-4">
                    <h2 className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>Spruce</h2>
                </div>
                <ul className="p-4 *:my-4 *:bg-gray-700 *:p-2 *:rounded-md flex-shrink-0 whitespace-nowrap">
                    <li onClick={() => setActiveTab(0)} className="flex items-center gap-2 hover:bg-gray-600 transition-colors duration-300 cursor-pointer">
                        <Settings /> Bot Settings
                    </li>
                    <li onClick={() => setActiveTab(1)} className="flex items-center gap-2 hover:bg-gray-600 transition-colors duration-300 cursor-pointer">
                        <Trophy /> Events
                    </li>
                    <li onClick={() => setActiveTab(2)} className="flex items-center gap-2 hover:bg-gray-600 transition-colors duration-300 cursor-pointer">
                        <Terminal className="hover:text-gray-400" /> Commands
                    </li>
                    <li onClick={() => setActiveTab(3)} className="flex items-center gap-2 hover:bg-gray-600 transition-colors duration-300 cursor-pointer">
                        <Crown className="hover:text-yellow-500" /> Subscription
                    </li>
                </ul>
            </div>

            <div id="content" className={`${!isMobile && 'ml-72'} flex-1 w-screen h-screen bg-gray-900 text-white`}>

                <div className="flex flex-row justify-between items-center bg-gray-800 p-4">
                    <h2 className="text-2xl font-bold">{tabs[activeTab]}</h2>
                    {isMobile && <Menu className="hover:text-gray-400 transition-colors duration-300 cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />}
                </div>

                <div className={`container p-4 ${!isMobile ? 'grid grid-cols-2' : 'flex flex-col '} w-full h-full gap-4`}>
                    {activeTab == 0 && (
                        <div className="content  w-full h-full rounded-lg overflow-hidden">

                            <div className="header  p-4 w-full bg-gray-700">
                                <h2 className="text-xl font-bold">Nick Name</h2>
                                <p className="text-gray-300">Set the bot's custom nick name</p>
                            </div>
                            <div className="editor justify-center mx-auto bg-gray-500 rounded-br-lg rounded-bl-lg">
                                <input type="text" placeholder={'Spruce'} className={`${!isMobile && 'w-[80%]'} bg-gray-800 m-2 rounded-lg outline-none p-1`} />
                                <button className="bg-blue-600 hover:bg-blue-500 hover:scale-95 rounded-lg p-1 px-4 font-bold">Change</button>
                            </div>
                        </div>
                    )}
                    {activeTab==1&&(
                        <div className="container">
                            <h2>Events</h2>
                        </div>
                    )}
                    {activeTab==2&&(
                        <div className="container">
                            <h2>Commands</h2>
                        </div>
                    )}
                    {activeTab==3&&(
                        <div className="container">
                            <h2>Subscription</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default GuildPage;