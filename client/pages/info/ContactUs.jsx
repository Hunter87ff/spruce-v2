import { useState } from 'react';
import { Mail, MessageSquare, Phone, Clock, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import Navbar from '../../components/block/Navbar';
import Footer from '../../components/block/Footer';


const ContactUs = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        
        {
            question: "How many games we can organise with spruce?",
            answer: "You can organise almost every game with spruce. as it provides custom group formation."
        },
        {
            question: "Why the paid features are available for free?",
            answer: "Right now we're trying to get some user feed back to improve it even further that's why we've released some paid services for free."
        },
        {
            question: "Facing trouble to manage server through dashboard.",
            answer: "There might be some maintanance in the web based dashboard. during this time we suggest you to use spruce through commands."
        }
    ];

    const supportChannels = [
        {
            title: "Customer Support",
            email: "support@sprucbot.tech",
            description: "For general inquiries and product support",
            icon: MessageSquare
        },
        {
            title: "Technical Support",
            email: "technical@sprucbot.tech",
            description: "For technical issues and bug reports",
            icon: Mail
        },
        {
            title: "Business Inquiries",
            email: "business@sprucbot.tech",
            description: "For partnerships and business opportunities",
            icon: Phone
        }
    ];

    return (
        <div className="">
            <Navbar />
            <div className="min-h-screen min-w-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20">
                {/* Hero Section */}
                <div className="py-16 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        We&apos;re Here to Help
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Choose the best way to get in touch with our team
                    </p>
                </div>

                {/* Support Channels Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="grid md:grid-cols-3 gap-8">
                        {supportChannels.map((channel, index) => (
                            <div key={index} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300">
                                <channel.icon className="w-10 h-10 text-blue-500 mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                                <p className="text-gray-400 mb-4">{channel.description}</p>
                                <a href={`mailto:${channel.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                                    {channel.email}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>


                {/* FAQs Section */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/80 transition-all duration-300"
                            >
                                <button
                                    className="w-full px-6 py-4 text-left flex items-center justify-between"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span className="text-white font-medium">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-gray-400" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-400">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;