import { useNavigate } from 'react-router-dom';
import { LazyImage } from '../../components.jsx';
import PropTypes from 'prop-types';

const GuildCard = ({ id, name, icon }) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row h-20 bg-neutral-800/50 rounded-lg hover:bg-neutral-700/50 transition-colors cursor-pointer" onClick={() => navigate(`/servers/${id}`)}>
            <div className="w-12 h-full mx-2 flex items-center justify-center">
            <LazyImage 
                src={icon 
                    ? `https://cdn.discordapp.com/icons/${id}/${icon}.png` 
                    : '/spruce.svg'}
                placeholder={'/spruce.svg'}
                alt={name}
                className="rounded-full mr-4"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold text-white">{name.slice(0, 15)}</h3>
            </div>
        </div>
    );
};

GuildCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default GuildCard;
