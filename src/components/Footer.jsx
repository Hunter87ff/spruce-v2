import React from 'react';
import { Bot, Twitter, Github, Heart } from 'lucide-react';
import {DiscordIcon} from '../ext/icons.jsx';
import { footerSections } from '../ext/constant.jsx';
import configs from "../ext/config.json";


const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              {/* <Bot className="h-8 w-8 text-indigo-500 mr-2" /> */}
              <span className="text-2xl font-bold text-white">Spruce</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Elevate your Discord server with the most comprehensive esports and community management bot. Built for competitive gaming communities.
            </p>
            <div className="flex space-x-4">
              <a href={`${configs.SUPPORT_SERVER}`} className="text-gray-400 hover:text-white transition-colors">
                <DiscordIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href={`${configs.GITHUB}`} className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation sections */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h3 className="text-white font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href={`${link.url}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="text-gray-400 text-sm">Active Servers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">300+</p>
            <p className="text-gray-400 text-sm">Tournaments</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">1M+</p>
            <p className="text-gray-400 text-sm">Commands Used</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">99%</p>
            <p className="text-gray-400 text-sm">Uptime</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Spruce. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>for the Esports Community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;