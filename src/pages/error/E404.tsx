import React from 'react';
import { Link } from 'react-router-dom';

const E404: React.FC = () => {
    return (
        <div className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-[#1a1a1a] text-white font-['Inter']">
            <h1 className="text-9xl text-white font-bold ">
                404
            </h1>
            <h2 className="text-2xl my-5 text-[#9e9e9e]">
                Oops! Looks like Spruce got lost in the forest
            </h2>
            <Link
                to="/"
                className="bg-blue-700 text-white no-underline px-5 py-2 rounded-md hover:text-white hover:bg-blue-600"
            >
                Return to Home
            </Link>
        </div>
    );
};

export default E404;
