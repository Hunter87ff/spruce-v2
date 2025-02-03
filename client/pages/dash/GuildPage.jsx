import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Server, Trophy, Terminal, Menu, Settings, Crown } from "lucide-react"
import {INVITE_URL} from "../../config.js"
const GuildPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const tabs = [
        {
            id: 3462346,
            name: "Settings",
            icon: Settings
        },
        {
            id: 3462347,
            name: "Servers",
            icon: Server,
            url : '/servers'
        },
        {
            id: 3462348,
            name: "Events",
            icon: Trophy
        },
        {
            id: 3462349,
            name: "Commands",
            icon: Terminal
        },
        {
            id: 3462350,
            name: "Subscription",
            icon: Crown
        }
    ]
    const [isMobile, setisMobile] = useState(window.innerWidth < 768);
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
    const [activeTab, setActiveTab] = useState(0);
    const [guild, setGuild] = useState({});

    // fetch guild from backend
    async function fetchGuild(){
        const guildId = parseInt(params.id);
        try{
            
            const _resp = await fetch(`/api/guilds/${guildId}`);
            const data = await _resp.json();
            if(_resp.status==408){
                window.location.href=INVITE_URL+guildId;
            }
            setGuild(data);
        }catch(err){
            // window.location.href=INVITE_URL+guildId;
        }
    }

    // change mobile status based on window width
    async function windowManage() {
        window.onresize = () => {
            setisMobile(window.innerWidth < 768)
        }
    }

    useEffect(() => {
        fetchGuild()
        windowManage(), []
    })


    return (
        <div className="container flex-row flex min-w-screen min-h-screen">
            <div id="sidebar" className={`fixed text-white overflow-hidden transition-all duration-200  z-10 h-screen  bg-gray-800 ${isSidebarOpen || !isMobile ? 'w-72' : 'w-0 '}`}>
                <div className="header bg-emerald-700 p-4">
                    <h2 className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>Spruce</h2>
                </div>
                <ul className="p-4 *:my-4 *:bg-gray-700 *:p-2 *:rounded-md flex-shrink-0 whitespace-nowrap">
                    {tabs.map((tab, index) => (
                        <li key={tab.id} onClick={() => { 
                            if(tab.url) navigate(tab.url);

                            setActiveTab(index);

                            setIsSidebarOpen(false) }} className="flex items-center gap-2 hover:bg-gray-600 transition-colors duration-300 cursor-pointer">
                            <tab.icon /> {tab.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div id="content" className={`${!isMobile && 'ml-72'} flex-1 min-w-screen min-h-screen bg-gray-900 text-white`}>

                <div className="flex flex-row justify-between items-center bg-gray-800 p-4">
                    <h2 className="text-2xl font-bold">{tabs[activeTab]?.name}</h2>
                    {isMobile && <Menu className="hover:text-gray-400 transition-colors duration-300 cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />}
                </div>


                {tabs[activeTab].id==3462346 && (
                    <div className={`container p-4 ${!isMobile ? 'grid grid-cols-2' : 'flex flex-col '} w-full h-full gap-4`}>

                        <div className="content  w-full h-full rounded-lg overflow-hidden">
                            <div className="cards my-4">
                                <div className="header rounded-t-lg  p-4 w-full bg-gray-700">
                                    <h2 className="text-xl font-bold">Nick Name</h2>
                                    <p className="text-gray-300">Set the bot's custom nick name</p>
                                </div>
                                <div className="editor justify-center mx-auto bg-gray-500 rounded-b-lg">
                                    <input type="text" placeholder={'Spruce'} className={`${!isMobile && 'w-[80%]'} bg-gray-800 m-2 rounded-lg outline-none p-1`} />
                                    <button className="bg-blue-600 hover:bg-blue-500 hover:scale-95 rounded-lg p-1 px-4 font-bold">Change</button>
                                </div>
                            </div>


                            <div className="cards my-4">
                                <div className="header rounded-t-lg  p-4 w-full bg-gray-700">
                                    <h2 className="text-xl font-bold">Check Prms</h2>
                                    <p className="text-gray-300">Check permissions of bot</p>
                                </div>
                                <div className="editor justify-center mx-auto bg-gray-500 rounded-b-lg">
                                    <input type="text" placeholder={'tourney_setup'} className={`${!isMobile && 'w-[80%]'} bg-gray-800 m-2 rounded-lg outline-none p-1`} />
                                    <button className="bg-blue-600 hover:bg-blue-500 hover:scale-95 rounded-lg p-1 px-4 font-bold">Check</button>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
                {tabs[activeTab].id==3462348 && (
                    <div className="container">
                        <h2>Events</h2>
                    </div>
                )}
                {tabs[activeTab].id==3462349 && (
                    <div className="container">
                        <h2>Commands</h2>
                    </div>
                )}
                {tabs[activeTab].id==3462350 && (
                    <div className="container">
                        <h2>Subscription</h2>
                    </div>
                )}
            </div>

        </div>
    )
}

export default GuildPage;