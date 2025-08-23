import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-[#FDFDFD]">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full h-96 md:h-full relative"
          >
            <img 
              className="object-cover w-full h-full"
              alt="Portrait of Roh Gants, a professional photographer, looking thoughtfully at the camera in a natural light setting"
             src="https://images.unsplash.com/photo-1505761809615-0e2a532be598" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Roh Gants
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm a New York-based wedding and portrait photographer with a passion for capturing authentic, emotional, and timeless stories. My approach is documentary in nature, focusing on real moments as they unfold.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a background in fine art, I bring a unique perspective to every wedding, blending photojournalism with an editorial eye to create images that are both beautiful and meaningful.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;