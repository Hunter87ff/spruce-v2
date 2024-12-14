import React, { useEffect } from 'react';
import { Loader2, Bot } from 'lucide-react';

import * as config from '../config.js';
import Navbar from '../components/Navbar.jsx';
import { fetch_api } from '../ext/util.js';
const AuthPage = () => {

    const handleLogin = async () => {
        const _validStatus = [200, 201, 204, 304];
        try {
            let _resp = await fetch_api(`${config.API_ROUTE}/auth/oauth2`);
            if (_validStatus.includes(_resp.status)) {
                localStorage.setItem("user", JSON.stringify(_resp.data));
                window.location.href = "/dashboard";
            }
            else {
                window.location.href = "/api/auth/login";
            }
        } catch (error) {
            console.error('Error fetching access token:', error.response?.data || error.message);
            window.location.href = "/api/auth/login";
        }
    }

    useEffect(() => {
        const interval = setInterval(handleLogin, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="container">
            <Navbar />
            <div className="flex flex-col items-center justify-center min-w-screen min-h-screen bg-gray-900">
                {/* Main container */}
                <div className="w-full max-w-md p-8 space-y-8">

                    {/* Animated bot icon */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-50 animate-pulse" />
                            <Bot className="w-16 h-16 text-indigo-400 relative z-10" />
                        </div>
                    </div>

                    {/* Loading spinner */}
                    <div className="flex justify-center">
                        <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
                    </div>

                    {/* Loading text */}
                    <div className="space-y-4">
                        {/* Loading message */}
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-white">Loading...</h2>
                            <p className="mt-2 text-sm text-gray-400">Connecting to Discord...</p>
                        </div>

                        {/* Stats preview - skeleton loading */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="p-4 bg-gray-800 rounded-lg">
                                <div className="h-2 bg-gray-600 rounded-full animate-pulse w-16 mb-2" />
                                <div className="h-4 bg-gray-600 rounded-full animate-pulse w-20" />
                            </div>
                            <div className="p-4 bg-gray-800 rounded-lg">
                                <div className="h-2 bg-gray-600 rounded-full animate-pulse w-16 mb-2" />
                                <div className="h-4 bg-gray-600 rounded-full animate-pulse w-20" />
                            </div>
                        </div>

                        {/* Server status indicator */}
                        <div className="flex items-center justify-center space-x-2 mt-4">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                            <span className="text-sm text-gray-400">Fetching server status...</span>
                        </div>
                    </div>

                    {/* Footer status messages */}
                    <div className="space-y-2">
                        <div className="flex justify-center items-center space-x-2">
                            <div className="h-1 w-1 bg-indigo-400 rounded-full animate-ping" />
                            <p className="text-xs text-gray-500">Loading server information</p>
                        </div>
                        <div className="flex justify-center items-center space-x-2">
                            <div className="h-1 w-1 bg-indigo-400 rounded-full animate-ping delay-75" />
                            <p className="text-xs text-gray-500">Syncing bot configurations</p>
                        </div>
                        <div className="flex justify-center items-center space-x-2">
                            <div className="h-1 w-1 bg-indigo-400 rounded-full animate-ping delay-150" />
                            <p className="text-xs text-gray-500">Preparing dashboard interface</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;