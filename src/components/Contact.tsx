import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const services = [
    'AI Solutions & Consulting',
    'Web Development',
    '3D Graphical Animation',
    'Digital Marketing',
    'Custom Solution',
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: '72ailabs@gmail.com',
      link: 'mailto:72ailabs@gmail.com',
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 9129050652',
      link: 'tel:+919129050652',
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Lucknow, India',
      link: '#',
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/72ailabs' },
    { name: 'Instagram', icon: '📷', url: 'https//instagram.com/72ailabs' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'GitHub', icon: '💻', url: '#' },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-gradient">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to transform your business with AI? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            className="contact-form-container"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <motion.div
                  className="input-container"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    {...register('name', { required: 'Name is required' })}
                  />
                  <label className="form-label">Name *</label>
                </motion.div>
                {errors.name && (
                  <motion.span
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.name.message}
                  </motion.span>
                )}
              </div>

              <div className="form-group">
                <motion.div
                  className="input-container"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="email"
                    placeholder="your.email@company.com"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  <label className="form-label">Email *</label>
                </motion.div>
                {errors.email && (
                  <motion.span
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.email.message}
                  </motion.span>
                )}
              </div>

              <div className="form-group">
                <motion.div
                  className="input-container"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="form-input"
                    {...register('company')}
                  />
                  <label className="form-label">Company</label>
                </motion.div>
              </div>

              <div className="form-group">
                <motion.div
                  className="input-container"
                  whileFocus={{ scale: 1.02 }}
                >
                  <select
                    className={`form-input ${errors.service ? 'error' : ''}`}
                    {...register('service', { required: 'Please select a service' })}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <label className="form-label">Service *</label>
                </motion.div>
                {errors.service && (
                  <motion.span
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.service.message}
                  </motion.span>
                )}
              </div>

              <div className="form-group">
                <motion.div
                  className="input-container"
                  whileFocus={{ scale: 1.02 }}
                >
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={`form-input ${errors.message ? 'error' : ''}`}
                    {...register('message', { required: 'Message is required' })}
                  />
                  <label className="form-label">Message *</label>
                </motion.div>
                {errors.message && (
                  <motion.span
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.message.message}
                  </motion.span>
                )}
              </div>

              <motion.button
                type="submit"
                className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  className="status-message success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="status-message error"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="contact-details">
              <h3>Let's Start a Conversation</h3>
              <p>
                We're here to help you leverage AI for your business success. 
                Reach out to us through any of the channels below.
              </p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="contact-method"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="method-icon">{info.icon}</div>
                    <div className="method-content">
                      <div className="method-title">{info.title}</div>
                      <div className="method-value">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="social-link"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      title={social.name}
                    >
                      <span>{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <motion.div
              className="response-card"
              whileHover={{ y: -5 }}
            >
              <div className="response-icon">⚡</div>
              <h4>Quick Response</h4>
              <p>We typically respond within 24 hours</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
