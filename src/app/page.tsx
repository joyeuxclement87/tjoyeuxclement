'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home(): JSX.Element {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      const heroBottom = heroSection?.getBoundingClientRect().bottom ?? 0;
      setIsNavFixed(heroBottom <= 0);

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

  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      <div className="background-glow" />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4">
        <Hero />
        <Navigation isFixed={isNavFixed} activeSection={activeSection} />

        <div className={isNavFixed ? 'mt-16' : ''}>
          <Projects />
          <About />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
