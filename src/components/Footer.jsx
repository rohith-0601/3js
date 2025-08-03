import React from 'react';
import { socialLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-100 mt-20 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 text-center sm:text-left">
          © {new Date().getFullYear()} Rohith Perugu — All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 sm:mt-0">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img
                src={social.iconUrl}
                alt={social.name}
                className="w-6 h-6 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
