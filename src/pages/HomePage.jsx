import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getGalleries } from '../data/galleries';
import { Helmet } from 'react-helmet';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1, transition: { staggerChildren: 0.1 } },
  out: { opacity: 0 },
};

const itemVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ClientGalleriesPage = () => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    setGalleries(getGalleries());
  }, []);

  return (
    <>
      <Helmet>
        <title>Client Galleries - Roh Gants Photography</title>
        <meta name="description" content="Access your private wedding and portrait photography galleries." />
      </Helmet>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className="section-padding pt-32 min-h-screen"
      >
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Client Galleries
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Welcome. Find your gallery below to relive your beautiful moments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.map((gallery) => (
              <motion.div key={gallery.id} variants={itemVariants}>
                <Link to={`/clients/${gallery.id}`} className="block group">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={gallery.coverImage}
                      alt={`Cover for ${gallery.title}'s gallery`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>
                  <div className="pt-5 text-center">
                    <h2 className="font-serif text-2xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                      {gallery.title}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {gallery.date} &middot; {gallery.location}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ClientGalleriesPage;