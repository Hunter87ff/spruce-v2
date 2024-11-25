import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Privacy = () => {
    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Hero Section */}
            <Navbar />
            <div className="container mx-auto py-20 w-full px-4">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
                    <p className="mb-4">Last Update: 7 August 2023</p>
                    <p className="mb-4">Spruce Bot respects the privacy of its users and is committed to protecting their personal information. This privacy policy explains how we collect, use, and store the data that we receive from our users.</p>
                    <h2 className="text-2xl font-semibold mb-4">What Information Do We Collect?</h2>
                    <p className="mb-4">We collect personal data like email and user name which is linked to user's account. Some other data that we collect is related to tournament categories, which we use to run the tournament module. We also keep track of the number of tournaments created on the Discord server for the purpose of limiting the number of tournaments that can be created.</p>
                    <h2 className="text-2xl font-semibold mb-4">How Do We Use Your Information?</h2>
                    <p className="mb-4">The information that we collect is used for the purpose of running the tournament module, checking your user status, letting you log in to the page, and limiting the number of tournaments that can be created on the Discord server. We do not sell or share any of the information that we collect from you.</p>
                    <h2 className="text-2xl font-semibold mb-4">How Do We Protect Your Information?</h2>
                    <p className="mb-4">We use industry-standard security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee the absolute security of your information.</p>
                    <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
                    <p className="mb-4">We reserve the right to modify or update this privacy policy at any time. If we make any material changes to this policy, we will notify our users by posting a notice on our website or by sending an email to the email address associated with their Discord account.</p>
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="mb-4">If you have any questions or concerns about this privacy policy, visit our contact page or mail us at support@sprucbot.tech.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy;