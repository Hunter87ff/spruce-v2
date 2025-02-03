import { GuildCard, Navbar, Footer } from '../../components/components.jsx';
import { useEffect, useState } from 'react';
import Permissions from '../../ext/permissions.js';

const Guilds = () => {
    const [guilds, setGuilds] = useState([]);
    useEffect(() => {

        const fetchGuilds = async () => {
            try {
                const res = await fetch(`/api/guilds`);
                const data = await res.json();
                if (res.status > 399) {
                    window.location.href = "/login"
                }
                setGuilds(data);
            }
            catch (err) {
                window.location.href = "/login"
            }
        };
        fetchGuilds();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container mx-auto lg:px-28 md:px-16 px-4 py-16 max-w-7xl">
                <h1 className="text-4xl font-bold text-left text-white py-4">Your Servers</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-between">
                    {guilds?.map((guild) => {
                        const perms = new Permissions(guild.permissions);
                        return perms.manageGuild && (
                            <GuildCard key={guild.id} id={guild.id} name={guild.name} icon={guild.icon} />)
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Guilds;