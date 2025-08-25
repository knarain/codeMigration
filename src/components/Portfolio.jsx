import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const portfolioItems = [
  { image: 'Romantic elopement photo of a couple on a city rooftop at dusk', alt: 'Couple on a city rooftop at dusk', tall: true },
  { image: 'Black and white photo of a bride laughing during her reception speech', alt: 'Laughing bride' },
  { image: 'Detailed shot of wedding rings on a vintage velvet ring box', alt: 'Wedding rings' },
  { image: 'Couple sharing a quiet moment in a sun-drenched field', alt: 'Couple in a field', tall: true },
  { image: 'Groom looking at his bride with adoration during the ceremony', alt: 'Groom looking at bride' },
  { image: 'Candid photo of guests dancing at a wedding reception', alt: 'Guests dancing' },
];

const Portfolio = () => {

  const handleViewPortfolio = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A curated selection of moments and stories from recent weddings and portrait sessions.
          </p>
        </motion.div>

        <div className="masonry-grid">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="masonry-grid-item"
              variants={itemVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <div className="relative overflow-hidden group">
                <img 
                  className={`w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105`}
                  alt={item.alt}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
           <Button
            onClick={handleViewPortfolio}
            variant="outline"
            className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-none px-10 py-6 text-sm uppercase tracking-widest"
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;