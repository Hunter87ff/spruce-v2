import { motion } from "framer-motion"
import PropTypes from 'prop-types';

function FeaturesCard({ icon, title, description, className="" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${className} bg-black rounded-xl p-6 border border-transparent`}>
            <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </motion.div>
    )
}

export default FeaturesCard;


FeaturesCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};