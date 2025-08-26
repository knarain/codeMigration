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
              alt="Portrait of Rashmi Photography, a professional photographer, looking thoughtfully at the camera in a natural light setting"
             src="https://images.unsplash.com/photo-1505761809615-0e2a532be598" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Rashmi Photography
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2014, Rashmi Photography was born out of pure passion and a shared love for storytelling through images. What started as a creative pursuit has now grown into a dedicated team of professionals with backgrounds in software engineering and an unshakable commitment to the art of photography.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Based in Hyderabad, with a strong presence in Bengaluru and across India, our mission is to create images that not only capture moments but also preserve memories that last a lifetime.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At Rashmi Photography, we don’t just take pictures—we tell stories of love, family, and celebration. Whether it’s a grand wedding, a candid portrait, or a heartfelt moment, our goal is to make every frame meaningful.
              </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;