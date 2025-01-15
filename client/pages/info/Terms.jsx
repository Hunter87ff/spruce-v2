import React from 'react';
import Navbar from '../../components/block/Navbar';
import Footer from '../../components/block/Footer';

const Terms = () => {
    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Hero Section */}
            <Navbar />
            <div className="container mx-auto py-20 w-full px-4">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
                    <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                    <p className="mb-4">Welcome to the Spruce! By accessing and using our services, you agree to comply with the following terms and conditions.</p>
                    <h2 className="text-2xl font-semibold mb-4">2. Account Registration</h2>
                    <p className="mb-4">To use our services, you must create an account on our website and provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and any activities that occur under your account.</p>
                    <h2 className="text-2xl font-semibold mb-4">3. Tournament Management</h2>
                    <p className="mb-4">Our Discord bot provides tournament management features. However, we do not guarantee the accuracy, availability, or reliability of the bot's functionalities. We reserve the right to modify or discontinue the services at any time without prior notice.</p>
                    <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
                    <p className="mb-4">You agree to use our services in compliance with all applicable laws and regulations. You must not engage in any activity that may disrupt or interfere with the proper functioning of the bot or our website. We reserve the right to terminate your account if you violate these terms.</p>
                    <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
                    <p className="mb-4">All intellectual property rights related to the Spruce Prime Tournament Bot and our website are owned by us. You are prohibited from copying, distributing, or using our intellectual property without our explicit permission.</p>
                    <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                    <p className="mb-4">We are not liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use of our services. You agree to use our services at your own risk.</p>
                    <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
                    <p className="mb-4">These terms and conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in India.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Terms;