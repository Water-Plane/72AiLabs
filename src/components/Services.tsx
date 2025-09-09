import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'AI Solutions & Consulting',
      description: 'RAG-based chatbots, automation tools, and predictive analytics to transform your business operations.',
      features: ['RAG-Based Chatbots', 'Automation & AI Tools', 'Data Science & Predictive Analytics'],
      icon: '🤖',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'MERN stack websites and AI-integrated web solutions built for performance and scalability.',
      features: ['MERN Stack Applications', 'AI-integrated Solutions', 'Responsive Design'],
      icon: '💻',
      gradient: 'linear-gradient(135deg, #0066ff 0%, #06b6d4 100%)',
    },
    {
      id: 3,
      title: '3D Graphical Animation',
      description: 'Stunning product animations, brand visuals, and motion graphics for ads and presentations.',
      features: ['Product & Brand Animations', 'Motion Graphics', 'Interactive 3D Elements'],
      icon: '🎨',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Data-driven campaigns across Google Ads, Meta platforms, and social media growth strategies.',
      features: ['Google & Meta Ads', 'Social Media Growth', 'Analytics & Tracking'],
      icon: '📈',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-gradient">Our Services</h2>
          <p className="services-subtitle">
            Comprehensive AI-powered solutions to accelerate your business growth
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className="service-card-inner">
                <div className="service-header">
                  <motion.div
                    className="service-icon"
                    style={{ background: service.gradient }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>{service.icon}</span>
                  </motion.div>
                  <h3 className="service-title">{service.title}</h3>
                </div>

                <p className="service-description">{service.description}</p>

                <div className="service-features">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="feature-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="service-cta"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Learn More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>

                {/* Hover Overlay */}
                <motion.div
                  className="service-overlay"
                  style={{ background: service.gradient }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="services-cta"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="heading-md">Ready to Transform Your Business?</h3>
          <p>Let's discuss how our AI solutions can drive your success</p>
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
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
