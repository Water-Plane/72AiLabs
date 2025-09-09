import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features: React.FC = () => {
  const techStack = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'TensorFlow', icon: '🧠', color: '#FF6F00' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'AWS', icon: '☁️', color: '#FF9900' },
  ];

  const aiCapabilities = [
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP models for chatbots, content analysis, and language understanding.',
      icon: '💬',
      features: ['RAG-based Chatbots', 'Sentiment Analysis', 'Text Generation'],
    },
    {
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual content analysis.',
      icon: '👁️',
      features: ['Image Classification', 'Object Detection', 'Visual Analytics'],
    },
    {
      title: 'Predictive Analytics',
      description: 'Machine learning models for forecasting and data-driven insights.',
      icon: '📊',
      features: ['Trend Forecasting', 'Risk Assessment', 'Performance Optimization'],
    },
    {
      title: 'Automation Solutions',
      description: 'Intelligent workflow automation and process optimization.',
      icon: '⚙️',
      features: ['Workflow Automation', 'Smart Scheduling', 'Resource Optimization'],
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="features" className="features section section-dark">
      <div className="container">
        {/* Header */}
        <motion.div
          className="features-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-gradient">AI Capabilities & Technology</h2>
          <p className="features-subtitle">
            Cutting-edge AI technologies and modern development stack powering your solutions
          </p>
        </motion.div>

        {/* AI Capabilities */}
        <motion.div
          className="ai-capabilities"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="section-title">AI Capabilities</h3>
          <div className="capabilities-grid">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="capability-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="capability-header">
                  <div className="capability-icon">{capability.icon}</div>
                  <h4>{capability.title}</h4>
                </div>
                <p className="capability-description">{capability.description}</p>
                <div className="capability-features">
                  {capability.features.map((feature, featureIndex) => (
                    <motion.span
                      key={featureIndex}
                      className="feature-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="tech-stack"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="section-title">Technology Stack</h3>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-item"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5, type: 'spring', stiffness: 200 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: `0 10px 30px ${tech.color}40`
                }}
              >
                <div className="tech-icon">{tech.icon}</div>
                <span className="tech-name">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          className="performance-metrics"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="section-title">Performance & Quality</h3>
          <div className="metrics-grid">
            <motion.div
              className="metric-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="metric-icon">⚡</div>
              <div className="metric-value">99.9%</div>
              <div className="metric-label">Uptime</div>
            </motion.div>
            <motion.div
              className="metric-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="metric-icon">🚀</div>
              <div className="metric-value">&lt;3s</div>
              <div className="metric-label">Load Time</div>
            </motion.div>
            <motion.div
              className="metric-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="metric-icon">🔒</div>
              <div className="metric-value">100%</div>
              <div className="metric-label">Secure</div>
            </motion.div>
            <motion.div
              className="metric-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="metric-icon">📱</div>
              <div className="metric-value">100%</div>
              <div className="metric-label">Responsive</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Integration Section */}
        <motion.div
          className="integration-section"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="integration-content">
            <h3 className="section-title">Seamless Integration</h3>
            <p>
              Our AI solutions integrate seamlessly with your existing systems and workflows. 
              From API integrations to custom implementations, we ensure smooth deployment 
              and minimal disruption to your operations.
            </p>
            <div className="integration-features">
              <div className="integration-feature">
                <span className="feature-icon">🔗</span>
                <span>API-First Architecture</span>
              </div>
              <div className="integration-feature">
                <span className="feature-icon">🔄</span>
                <span>Real-time Synchronization</span>
              </div>
              <div className="integration-feature">
                <span className="feature-icon">📊</span>
                <span>Advanced Analytics</span>
              </div>
              <div className="integration-feature">
                <span className="feature-icon">🛡️</span>
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
