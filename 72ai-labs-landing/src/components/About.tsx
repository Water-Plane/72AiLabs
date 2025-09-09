import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { number: '100+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge AI technologies and creative solutions.',
    },
    {
      icon: '🎯',
      title: 'Impact',
      description: 'Creating measurable results that drive real business transformation.',
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Building long-term relationships through trust and exceptional service.',
    },
    {
      icon: '⚡',
      title: 'Efficiency',
      description: 'Streamlining processes with intelligent automation and optimization.',
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="about-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-gradient">About 72 AI Labs</h2>
          <p className="about-subtitle">
            Transforming ideas into innovative AI solutions that create lasting impact
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="about-content">
          {/* Story Section */}
          <motion.div
            className="about-story"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="story-content">
              <h3 className="heading-md">Our Story</h3>
              <p>
                72 AI Labs is an innovation-driven AI startup that transforms ideas into impactful products. 
                We specialize in cutting-edge AI solutions, 3D animations, and digital marketing campaigns 
                to help businesses grow in the modern age.
              </p>
              <p>
                Our team combines deep technical expertise with creative vision to deliver solutions that 
                not only meet today's challenges but anticipate tomorrow's opportunities.
              </p>
            </div>
          </motion.div>

          {/* Vision & Mission */}
          <div className="vision-mission">
            <motion.div
              className="vision-card card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="card-icon">🔮</div>
              <h4>Our Vision</h4>
              <p>
                To empower businesses with intelligent, creative, and scalable solutions 
                through AI and digital innovation.
              </p>
            </motion.div>

            <motion.div
              className="mission-card card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="card-icon">🚀</div>
              <h4>Our Mission</h4>
              <p>
                Deliver next-gen AI tools, engaging visuals, and data-driven marketing 
                strategies that create real impact for our clients.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="stats-section"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          className="founders-section"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="heading-md text-center">Meet Our Founders</h3>
          <div className="founders-grid">
            <motion.div
              className="founder-card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="founder-avatar">👨‍💻</div>
              <h4>Harshit Tiwari</h4>
              <p className="founder-title">Co-Founder & CEO</p>
              <p className="founder-description">
                Visionary leader driving AI innovation and strategic growth at 72 AI Labs.
              </p>
              <motion.a
                href="https://linkedin.com/in/harshit-tiwari"
                target="_blank"
                rel="noopener noreferrer"
                className="founder-linkedin"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💼</span> Connect on LinkedIn
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="values-section"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="heading-md text-center">Our Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="about-cta"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="heading-md">Ready to Innovate Together?</h3>
          <p>Let's turn your ideas into impactful AI solutions</p>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
