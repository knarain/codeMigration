import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "./components/ui/toaster";
import SingleGalleryPage from "./pages/SingleGalleryPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ClientGalleriesPage from "./pages/ClientGalleriesPage"; // ✅ fixed import

function App() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Roh Gants Photography - Storytelling Through The Lens</title>
        <meta
          name="description"
          content="Elegant and timeless wedding, portrait, and editorial photography. Based in New York, available worldwide."
        />
        <meta
          property="og:title"
          content="Roh Gants Photography - Storytelling Through The Lens"
        />
        <meta
          property="og:description"
          content="Elegant and timeless wedding, portrait, and editorial photography. Based in New York, available worldwide."
        />
      </Helmet>

      <div className="min-h-screen bg-[#FDFDFD] text-gray-800 overflow-x-hidden">
        <Header />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/clients" element={<ClientGalleriesPage />} />
            <Route path="/clients/:galleryId" element={<SingleGalleryPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
