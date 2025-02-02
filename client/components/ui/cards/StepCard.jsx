import PropTypes from 'prop-types';

function StepCard({step, title, description, className="", stepClass=""}) {
    return (
        <div className={`${className} bg-black border rounded-xl p-8 relative `}>
            <div className={`${stepClass} absolute -top-6 left-1/2 transform backdrop-blur-lg bg-black -translate-x-1/2 border w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold`}>
                {step}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    )
}

StepCard.propTypes = {
    step: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    className: PropTypes.string,
    stepClass: PropTypes.string
};

export default StepCard;