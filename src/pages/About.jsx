import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import configs from "../ext/config.json";


const About = () => {
    // create the about page


    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 to-black text-white" id='about'>
            {/* Hero Section */}
            <Navbar />
            <div className="container mx-auto py-20 w-full">
                <h2 className='text-2xl font-bold text-white hover:text-ellipsis cursor-pointer text-center'>About Us</h2>
                <div className="about-container md:flex md:flex-row xl:flex-row">
                    <div className="left-info py-4 xl:max-w-50p">
                        <h2 className="text-2xl px-4 font-bold">Spruce</h2>
                        <div className="left-info-content">
                            <p className="py-4 px-4">
                                Spruce is a multifunctional and Open Source Discord app designed and developed by <a href={`${configs.AUTHOR_LINKEDIN}`}>Hunter87</a>. to streamline the management of Discord tournaments and servers. Our mission is to provide a comprehensive solution for tournament organizers and server administrators, ensuring a seamless and enjoyable experience for all participants.
                            </p>
                            <p className="py-4 px-4">
                                In addition to its tournament and server management capabilities, Spruce features an AI chatbot component. This advanced chatbot can answer user queries related to tournaments, provide information, and assist with various subjects. It supports text-to-speech functionality, allowing users to listen to responses, and includes translation features to facilitate communication across languages.
                            </p>
                            <p className='py-4 px-4'>

                            </p>
                        </div>
                    </div> {/*<!-- left-info --> */}
                    <div className="right-info py-4">
                        <h2 className="text-2xl px-4 font-bold">Key Features</h2>
                        <ul className="list-disc pl-6">
                            <li className="my-2">
                                Tournament management: Create, organize, and manage tournaments with ease.
                            </li>
                            <li className="my-2">
                                Server management: Automate moderation tasks, customize server settings, and enhance community engagement.
                            </li>
                            <li className="my-2">
                                AI Chatbot: Get answers to your tournament-related questions and other subjects.
                            </li>
                            <li className="nb-2">
                                Ticket Tools: Can create and manage tickets with a single command
                            </li>
                            <li className="my-2">
                                Music Player: Plays high quality music with user friendly menu and filters
                            </li>
                            <li className="my-2">
                                Text-to-speech: Converts given text to voice output.
                            </li>
                            <li className="my-2">
                                Translation: Communicate seamlessly across different languages.
                            </li>
                            <li className="my-2">
                                Server Sanitization : Sanitize the vulnarabilities to protect the server from suspicious activities.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;