import React from 'react';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Services from '../components/Services.jsx';
import Contact from '../components/Contact.jsx';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const HomePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </motion.div>
  );
};

export default HomePage;