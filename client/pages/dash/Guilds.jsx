import { GuildCard } from '../../components/components.jsx';
import { useEffect, useState } from 'react';

const Guilds = () => {
    const [guilds, setGuilds] = useState(JSON.parse(localStorage.getItem('guilds')) || []);

    useEffect(() => {
        const fetchGuilds = async () => {
            try {
                const res = await fetch('/api/guilds');
                const data = await res.json();
                if(res.status > 399){
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
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {guilds?.map((guild) => (
                    <GuildCard key={guild.id} id={guild.id} name={guild.name} icon={guild.icon} />
                ))}
            </div>
        </div>
    );
};

export default Guilds;