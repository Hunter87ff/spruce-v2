import { ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { features } from '../ext/constant.jsx';
import configs from "../ext/config.json";

const Home = () => {
    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 to-black text-white" id=''>
            {/* Hero Section */}
            <Navbar />
            <div className="container mx-auto py-20 w-full">
                {/* Alerts can be place here!!*/}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        {/* <Bot className="w-12 h-12 text-indigo-500 mr-4" /> */}
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent cursor-pointer">
                            Spruce
                        </h1>
                    </div>
                    <p className="text-xl text-gray-300 mb-8">
                        The Ultimate Esports Discord App for Tournament Management and Server Administration
                    </p>
                    <a href={`${configs.INVITE_URL}`}>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-all">
                            Add to Discord
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </button>
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-20 *:cursor-pointer">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-indigo-500">800+</h3>
                        <p className="text-gray-400">Servers</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-indigo-500">550k+</h3>
                        <p className="text-gray-400">Users</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-indigo-500">99%</h3>
                        <p className="text-gray-400">Uptime</p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 border-2 border-transparent rounded-xl bg-gray-800/50 backdrop-blur-sm hover:border-purple-700 transition-all">
                            <div className="mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold mb-4">Ready to elevate your server?</h2>
                    <p className="text-gray-300 mb-8">Join thousands of servers already using Spruce</p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-white border border-transparent text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-gray-800 hover:text-white hover:border-purple-700 transition-all">
                            Get Started
                        </button>
                        <button className="bg-gray-800 border border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-all">
                            View Documentation
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;