import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import logo from '../logo.svg';
// import ParticleBackground from './ParticleBackground';
// import TypewriterText from './TypewriterText';
import './Hero.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from('.hero-logo', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    })
    .from('.hero-subtitle', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.5')
    .from('.hero-description', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.3')
    .from('.hero-cta', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.2');

    // Floating animation for CTA buttons
    if (ctaRef.current) {
      gsap.to(ctaRef.current, {
        y: -10,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);


  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
          <div className="hero-background">
            {/* Elegant geometric pattern background */}
            <div className="geometric-pattern"></div>
            <div className="golden-particles"></div>
          </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="container">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Company Logo */}
            <motion.div
              className="hero-logo"
              initial={{ scale: 0.8, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <img src={logo} alt="72 AI Labs" className="hero-logo-image" />
              <div className="hero-logo-text">
                <span className="hero-company-name">72 AI Labs</span>
                <span className="hero-company-subtitle">Artificial Intelligence Solutions</span>
              </div>
            </motion.div>

            {/* Main Title with Typewriter Effect */}
            <h1 className="hero-title heading-xl">
              <span className="hero-title-word">Ideas</span>
              <span className="hero-title-arrow">→</span>
              <span className="hero-title-word">Innovation</span>
              <span className="hero-title-arrow">→</span>
              <span className="hero-title-word">Impact</span>
            </h1>

            {/* Subtitle */}
            <motion.h2
              className="hero-subtitle heading-lg text-gradient"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              Transforming Businesses with AI
            </motion.h2>

            {/* Description */}
            <motion.p
              className="hero-description"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              We specialize in cutting-edge AI solutions, 3D animations, and digital marketing 
              campaigns to help businesses grow in the modern age. From RAG-based chatbots to 
              predictive analytics, we deliver next-gen tools that create real impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="hero-cta"
              ref={ctaRef}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              <motion.button
                className="btn btn-primary"
                onClick={scrollToServices}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 102, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Services
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.button>

              <motion.button
                className="btn btn-outline"
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="scroll-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
            >
              <motion.div
                className="scroll-arrow"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 13l3 3 7-7M7 6l3 3 7-7"/>
                </svg>
              </motion.div>
              <span>Scroll to discover</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <motion.div
          className="floating-element element-1"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="floating-element element-2"
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="floating-element element-3"
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
