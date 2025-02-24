'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageLoader from '@/components/PageLoader';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function Home(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Hide loader after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navSection = document.getElementById('nav-anchor');
      if (navSection) {
        const navTop = navSection.getBoundingClientRect().top;
        setIsNavFixed(navTop <= 0);
      }

      // Update active section logic
      const sections = ['home', 'projects', 'about', 'skills', 'contact'];
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

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden font-sans"
    >
      <div className="background-glow" />
      
      <main className="relative">
        <Header />
        <section id="home">
          <Hero />
          <div id="nav-anchor">
            <Navigation isFixed={isNavFixed} activeSection={activeSection} />
          </div>
        </section>

        <div className={isNavFixed ? 'mt-16' : ''}>
          <Projects />
          <About />
          <Skills />
          <Contact />
        </div>
      </main>

      <FloatingActions show={isNavFixed} />
      <Footer />
    </motion.div>
  );
}
