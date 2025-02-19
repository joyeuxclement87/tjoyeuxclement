import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/FeaturedWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background text-text">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Navbar />
            <Home />
            <About />
            <Work />
            <Contact />
            <Footer />
            <BackToTop />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
