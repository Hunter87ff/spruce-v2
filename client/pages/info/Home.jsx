import { features } from '../../ext/constant.jsx';
import { FeaturesCard, Navbar, Footer, StepCard } from '../../components/components.jsx';
import { motion } from "framer-motion"
import { INVITE_URL } from '../../config.js';



const Home = () => {
    const steps = [
        {
            title: "Create Tournament",
            description: "Set up your tournament details, rules, and prize pool in minutes"
        },
        {
            title: "Open Registration",
            description: "Let teams and players to register with the easiest registration process."
        },
        {
            title: "Start Playing",
            description: "After Filling slots manage teams with ease."
        }
    ]

    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 to-black text-white" id=''>
            {/* Hero Section */}
            <Navbar />
            <section id="hero" className="min-h-[70vh] pt-16">

                {/* Main Landing... */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="flex flex-col items-center justify-center text-center py-12 lg:py-20 mt-12 md:mt-0">
                        <div className="w-full max-w-3xl space-y-8">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-white bg-clip-text text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                Manage Events with <br/>
                                <span className="text-emerald-500">Spruce</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-gray-300 text-lg md:text-xl">
                                Empowering communities with cutting-edge tournament solutions. From AI-driven analytics to seamless integrations, we're shaping the future of esports.
                            </motion.p>

                            <div className="flex flex-row gap-4 justify-center">
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="btn-secondary">
                                    Start Tournament
                                </motion.button>
                                <a href={INVITE_URL}>
                                    <button
                                        className="btn-tertiary">
                                        Invite Spruce
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-10">
                {/* Features */}
                <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl md:text-4xl font-bold text-white mb-4">What Spruce Provides</motion.h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to manage your esports community.</p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 *:z-10">
                        {features.map((val, index) => (
                            <FeaturesCard className='border-gray-600 border cursor-pointer hover:scale-105 transition-transform duration-300' key={index} icon={val.icon} title={val.title} description={val.description} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Steps section */}
            <section id="how-spruce-works" className="py-20 px-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Spruce Works</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Get your tournament up and running in three simple steps</p>
                    </div>

                    <div className="relative">

                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-emerald-500/30"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">

                            {steps.map((val, index) => (
                                <StepCard key={index} step={index + 1} title={val.title} description={val.description} className="border-gray-500" stepClass="border-gray-500" />
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <button
                            className="btn-secondary ">
                            Start Your Tournament Now
                        </button>
                    </div>
                </div>
            </section>
            <Footer className="bg-neutral-900/50" />
        </div>
    );
};

export default Home;