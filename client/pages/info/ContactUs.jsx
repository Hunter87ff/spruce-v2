import { useState } from 'react';
import { Mail, MessageSquare, Phone, Clock, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import Navbar from '../../components/block/Navbar';
import Footer from '../../components/block/Footer';


const ContactUs = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            question: "How many games do we organize ?",
            answer: "We mostly organize BGMI and Free Fire tournaments. But we also organize other games like Valorant, CODM occasionally."
        },
        {
            question: "What are the supported withdrawl methods?",
            answer: "User can receive their winning amount through Paytm, UPI, Bank Transfer, and other payment methods."
        },
        {
            question: "How many time it takes to receive the winning amount?",
            answer: "Winning amount will be credited to your account after the tournament results are declared. It usually takes 1-2 hours."
        },
        {
            question: "What's included in premium support?",
            answer: "Premium support includes 24/7 priority response, dedicated account manager, and weekend support coverage."
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

                {/* Office Information */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="bg-gray-800/50 rounded-xl p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">Visit Our Office</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <p className="text-white">123 Business Avenue</p>
                                            <p className="text-gray-400">Suite 100</p>
                                            <p className="text-gray-400">New York, NY 10001</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Clock className="w-6 h-6 text-blue-500" />
                                        <div>
                                            <p className="text-white">Business Hours</p>
                                            <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                                            <p className="text-gray-400">Saturday - Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-64 md:h-auto bg-gray-700 rounded-lg">
                                {/* Map placeholder - Replace with actual map component */}
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    Map Integration
                                </div>
                            </div>
                        </div>
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