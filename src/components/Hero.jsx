import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const images = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552", alt: "Bride and groom kissing under a floral archway at their wedding" },
  { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8", alt: "Happy newlywed couple walking on a beach at sunset" },
  { src: "https://images.unsplash.com/photo-1543843194-521798319698", alt: "Close-up of a bride's intricate wedding dress details" },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const changeSlide = (direction) => {
    const newIndex = (index + direction + images.length) % images.length;
    setIndex(newIndex);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <AnimatePresence initial={false}>
        <motion.img
          key={images[index].src}
          src={images[index].src}
          alt={images[index].alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          key={`h1-${index}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl font-light tracking-wider"
        >
          Timeless Storytelling
        </motion.h1>
        <motion.p
          key={`p-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl font-light tracking-widest uppercase text-gray-200"
        >
          Hyderabad & Bengaluru.
        </motion.p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-10">
        <Button variant="ghost" size="icon" onClick={() => changeSlide(-1)} className="text-white/70 hover:text-white hover:bg-white/10 rounded-full h-12 w-12">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => changeSlide(1)} className="text-white/70 hover:text-white hover:bg-white/10 rounded-full h-12 w-12">
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === index ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;