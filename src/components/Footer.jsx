import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#FDFDFD] border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="font-serif text-2xl font-semibold tracking-wider text-gray-900 mb-4">
            Rashmi Photography
          </div>

          <div className="flex space-x-6 mb-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500">
            © {currentYear} Rashmi Photography. All Rights Reserved.
          </p>
          <p className="text-center text-sm text-gray-500 mt-1">
            Hyderabad-Bengaluru | Available Across India.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;