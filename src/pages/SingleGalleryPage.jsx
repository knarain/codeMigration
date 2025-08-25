import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Button } from "../components/ui/button"; 
import { Input } from "../components/ui/input";
import { Lock, ArrowLeft } from 'lucide-react';
import { useToast } from '../components/ui/use-toast';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const itemVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const SingleGalleryPage = () => {
  const { galleryId } = useParams();
  const { toast } = useToast();
  const [gallery, setGallery] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setIsLoading(true);
        // 🔹 Update API URL as per your backend
        const response = await axios.get(`http://localhost:8080/api/galleries/${galleryId}`);
        setGallery(response.data);

        // check if already authenticated (localStorage)
        const authKey = `gallery_auth_${galleryId}`;
        const storedAuth = localStorage.getItem(authKey);
        if (storedAuth === 'true') {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error fetching gallery:", error);
        setGallery(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, [galleryId]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === gallery?.password) {
      const authKey = `gallery_auth_${galleryId}`;
      localStorage.setItem(authKey, 'true');
      setIsAuthenticated(true);
      toast({
        title: 'Success!',
        description: 'Welcome to your gallery.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Incorrect Password',
        description: 'Please try again.',
      });
    }
    setPassword('');
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!gallery) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-4xl mb-4">Gallery Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the gallery you're looking for.
        </p>
        <Link to="/clients">
          <Button
            variant="outline"
            className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-none px-10 py-6 text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Galleries
          </Button>
        </Link>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <Helmet>
          <title>Enter Password - {gallery.title}</title>
        </Helmet>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="h-screen w-full flex items-center justify-center bg-gray-100"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 sm:p-12 text-center max-w-md w-full mx-4"
          >
            <Lock className="mx-auto h-10 w-10 text-gray-400 mb-4" />
            <h1 className="font-serif text-2xl md:text-3xl font-light text-gray-900 mb-2">
              This gallery is private
            </h1>
            <p className="text-gray-600 mb-6">
              Please enter the password to view the photos for{" "}
              <span className="font-semibold">{gallery.title}</span>.
            </p>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <Input
                type="password"
                placeholder="Gallery Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-center"
              />
              <Button
                type="submit"
                className="w-full bg-gray-800 text-white hover:bg-gray-900 rounded-none py-6 text-sm uppercase tracking-widest"
              >
                Enter
              </Button>
            </form>
            <Link
              to="/clients"
              className="inline-block mt-6 text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="inline-block mr-1 h-3 w-3" />
              Return to Client Galleries
            </Link>
          </motion.div>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{gallery.title} - Roh Gants Photography</title>
        <meta
          name="description"
          content={`Photo gallery for ${gallery.title}, captured by Roh Gants Photography.`}
        />
      </Helmet>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="section-padding pt-32"
      >
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-2">
              {gallery.title}
            </h1>
            <p className="text-gray-600">
              {gallery.date} &middot; {gallery.location}
            </p>
          </motion.div>

          <div className="masonry-grid">
            {gallery.images &&
              gallery.images.map((item, index) => (
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
                      className="w-full h-auto object-cover"
                      src={item.src}
                      alt={item.alt || `Image ${index + 1}`}
                    />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleGalleryPage;
