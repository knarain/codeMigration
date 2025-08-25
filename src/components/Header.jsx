import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ];
  
  const scrollToSection = (id) => {
    setIsOpen(false);
    // A small delay to allow page transition if coming from another page
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };


  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled || isOpen ? 'bg-[#FDFDFD]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <NavLink to="/" className="font-serif text-2xl font-semibold tracking-wider text-gray-900">
              Rashmi Photography
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    if(item.href.startsWith('/#')) {
                      e.preventDefault();
                      scrollToSection(item.href.substring(2));
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className="text-sm font-medium uppercase tracking-widest text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 hover:text-gray-900"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FDFDFD] pt-20 md:hidden"
          >
            <motion.div 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full space-y-8"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    if(item.href.startsWith('/#')) {
                      e.preventDefault();
                      scrollToSection(item.href.substring(2));
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className="text-xl font-medium uppercase tracking-widest text-gray-700 hover:text-gray-900 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;