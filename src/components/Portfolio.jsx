import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import axios from "axios";

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleViewPortfolio = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  // ✅ Animation variants
  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // ✅ Fetch data from images.json
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("images.json"); // place images.json in /public
        setPortfolioItems(response.data.images || []); // adjust based on actual structure
        console.log(response.data);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Failed to load images",
          description: "Could not fetch portfolio items. Please try again later.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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

        {loading ? (
          <p className="text-center text-gray-500">Loading portfolio...</p>
        ) : (
          <div className="masonry-grid">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className={`masonry-grid-item ${item.tall ? "row-span-2" : ""}`}
                variants={itemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <div className="relative overflow-hidden group">
                  <img
                    className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    alt={item.alt}
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

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
