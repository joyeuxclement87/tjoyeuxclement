'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageLoader from '@/components/PageLoader';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Approach from '@/components/Approach';
import WorkPreview from '@/components/WorkPreview';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check if we've already shown the loader in this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    if (hasSeenLoader) {
      setIsLoading(false);
      return;
    }

    // Hide loader after 3 seconds on first visit
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('hasSeenLoader', 'true');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Handle hash scrolling after component mounts/loading finishes
  useEffect(() => {
    if (!isLoading) {
      const hash = window.location.hash;
      if (hash) {
        // Short timeout allows Framer Motion to actually render the DOM elements first
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    }
  }, [isLoading]);

  useEffect(() => {
    const handleScroll = () => {

      // Update active section logic
      const sections = ['home', 'about', 'skills', 'approach', 'services', 'work', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <PageLoader key="loader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen relative overflow-hidden font-sans"
        >
        <div className="background-glow" />
        
        <main className="relative">
          <Header />
          <Navigation activeSection={activeSection} />
          
          <section id="home">
            <Hero />
          </section>

          <div className="mt-0">
            <About />
            <Skills />
            <Approach />
            <Services />
            <WorkPreview />
          </div>
        </main>

        <FloatingActions show={true} />
        <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
