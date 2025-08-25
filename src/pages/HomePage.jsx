
import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => (
  <>
    <Helmet>
      <title>Rashmi Photography -  Capturing Happiness..</title>
      <meta name="description" content="Elegant and timeless wedding, portrait, and editorial photography. Based in New York, available worldwide." />
    </Helmet>
    <div className="section-padding pt-32 min-h-screen text-center">
      <h1 className="font-serif text-5xl font-light text-gray-900 mb-6">Welcome to Rashmi Photography</h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Capturing elegant and timeless moments for weddings, portraits, and editorials. Based in Hyderabad and Bengaluru, available worldwide.
      </p>
      <img src="/public/logo512.png" alt="Rashmi Photography Logo" className="mx-auto mb-8 w-32 h-32" />
    </div>
  </>
);

export default HomePage;