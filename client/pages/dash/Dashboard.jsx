import React, { useEffect, useState } from 'react';
import {
    Users,
    Trophy,
    Calendar,
    Settings,
    PlusCircle,
    ChevronDown,
    Bell,
    Search
} from 'lucide-react';

const Dashboard = () => {
    
    function get_avatar_url(user) {
        return user.avatar_url || `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
    }

    const [selectedServer, setSelectedServer] = useState('Spruce Gaming');
    const [AvatarUrl, setAvatarUrl] = useState(get_avatar_url(JSON.parse(localStorage.getItem('user'))) || '/spruce.svg');
    const [serverList, setServerList] = useState([]);
    
    const tournaments = [
        {
            id: 1,
            name: "Winter Championship 2025",
            participants: 128,
            status: "ongoing",
            startDate: "2025-01-20",
            prize: "$1,000",
            game: "Valorant"
        },
        {
            id: 2,
            name: "Weekly Community Cup",
            participants: 64,
            status: "upcoming",
            startDate: "2025-01-22",
            prize: "$500",
            game: "League of Legends"
        },
        {
            id: 3,
            name: "Pro Series Qualifier",
            participants: 256,
            status: "completed",
            startDate: "2025-01-10",
            prize: "$2,000",
            game: "CS2"
        }
    ];


    // TODO: Fetch server list from API

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await fetch('/api/auth/oauth2');
                if (res.status === 200) {
                    const data = await res.json();
                    localStorage.setItem('user', JSON.stringify(data));
                    setAvatarUrl(get_avatar_url(data));
                } else {
                    window.location.href = '/login';
                }
            } catch (err) {
                // redirect to login page
                window.location.href = '/login';
            }
        };

        fetchUserData();
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'ongoing': return 'bg-green-500';
            case 'upcoming': return 'bg-blue-500';
            case 'completed': return 'bg-gray-500';
            default: return 'bg-gray-500';
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* Top Navigation */}
            <div className="border-b border-gray-800 bg-gray-900 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <span className="text-xl font-bold">Spruce</span>
                            <ChevronDown className="ml-2 h-5 w-5 text-gray-400" />
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search tournaments..."
                                className="w-96 rounded-lg bg-gray-800 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="rounded-full bg-gray-800 p-2">
                            <Bell className="h-5 w-5 text-gray-400" />
                        </button>
                        <div className="h-8 w-8 rounded-full bg-blue-500">
                            <img src={AvatarUrl} className='w-full h-full rounded-full' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex">
                {/* Sidebar */}
                <div className="w-64 border-r border-gray-800 bg-gray-900 p-4">
                    <div className="space-y-4">
                        <div className="rounded-lg bg-gray-800 p-4">
                            <h3 className="mb-2 font-semibold">Servers</h3>
                            <select
                                className="w-full rounded bg-gray-700 p-2 text-sm"
                                value={selectedServer}
                                onChange={(e) => setSelectedServer(e.target.value)}
                            >
                                <option selected disabled>Select Server</option>
                                {serverList.map((server) => (
                                    <option key={server.id} value={server.id}>{server.name}</option>
                                ))}

                            </select>
                        </div>
                        <nav className="space-y-2">
                            <button className="flex w-full items-center rounded-lg bg-blue-600 px-4 py-2 text-sm">
                                <Trophy className="mr-3 h-5 w-5" />
                                Tournaments
                            </button>
                            <button className="flex w-full items-center rounded-lg px-4 py-2 text-sm text-gray-400 hover:bg-gray-800">
                                <Users className="mr-3 h-5 w-5" />
                                Participants
                            </button>
                            <button className="flex w-full items-center rounded-lg px-4 py-2 text-sm text-gray-400 hover:bg-gray-800">
                                <Calendar className="mr-3 h-5 w-5" />
                                Schedule
                            </button>
                            <button className="flex w-full items-center rounded-lg px-4 py-2 text-sm text-gray-400 hover:bg-gray-800">
                                <Settings className="mr-3 h-5 w-5" />
                                Settings
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Main Area */}
                <div className="flex-1 p-8">
                    <div className="mb-8 flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Tournaments</h1>
                        <button className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700">
                            <PlusCircle className="mr-2 h-5 w-5" />
                            Create Tournament
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { label: 'Active Tournaments', value: '3' },
                            { label: 'Total Participants', value: '448' },
                            { label: 'Prize Pool', value: '$3,500' },
                            { label: 'Completed Events', value: '12' }
                        ].map((stat, index) => (
                            <div key={index} className="rounded-lg bg-gray-800 p-6">
                                <div className="text-sm text-gray-400">{stat.label}</div>
                                <div className="mt-2 text-2xl font-bold">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Tournaments Table */}
                    <div className="rounded-lg bg-gray-800">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-700">
                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Tournament</th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Game</th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Participants</th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Prize Pool</th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Start Date</th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tournaments.map((tournament) => (
                                        <tr key={tournament.id} className="border-b border-gray-700">
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <div className="font-medium">{tournament.name}</div>
                                            </td>
                                            <td className="px-6 py-4">{tournament.game}</td>
                                            <td className="px-6 py-4">{tournament.participants}</td>
                                            <td className="px-6 py-4">{tournament.prize}</td>
                                            <td className="px-6 py-4">{tournament.startDate}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(tournament.status)}`}>
                                                    {tournament.status.charAt(0).toUpperCase() + tournament.status.slice(1)}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;