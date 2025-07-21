import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '', 
    email: '',
    phoneNumber: '',
    topic: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      url: 'https://linkedin.com/in/rajatxdua',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      ),
      url: 'https://github.com/rajatxdua',
      color: '#333'
    },
    {
      name: 'YouTube',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="5,3 19,12 5,21"/>
        </svg>
      ),
      url: 'https://www.youtube.com/@rajatxdua',
      color: '#ff0000'
    },
    {
      name: 'Instagram',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
      url: 'https://www.instagram.com/therajatdua',
      color: '#e1306c'
    },
    {
      name: 'Twitter',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
        </svg>
      ),
      url: 'https://twitter.com/rajatxdua',
      color: '#1da1f2'
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!contactForm.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!contactForm.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!contactForm.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!contactForm.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (contactForm.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitMessage('Please fix the errors above');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_pf123zx',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_abc123',
        {
          from_name: `${contactForm.firstName} ${contactForm.lastName}`,
          from_email: contactForm.email,
          phone_number: contactForm.phoneNumber,
          topic: contactForm.topic,
          message: contactForm.message,
          to_name: 'Rajat Dua'
        },
        process.env.REACT_APP_EMAILJS_USER_ID || 'user_xyz789'
      );

      if (result.text === 'OK') {
        setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
        setContactForm({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          topic: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitMessage('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <div className="section-badge">
            <span>📧</span>
            Let's Connect
          </div>
          
          <h2 className="heading-xl">
            Ready to bring your <span className="gradient-text">ideas to life?</span>
          </h2>
          
          <p className="text-lg contact-description">
            Whether you have a project in mind, want to collaborate on content, 
            or just want to chat about tech and creativity, I'd love to hear from you.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="method-content">
                <h4>Email</h4>
                <a href="mailto:workspace.rajatdua@gmail.com">workspace.rajatdua@gmail.com</a>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <div className="method-content">
                <h4>Instagram</h4>
                <a href="https://www.instagram.com/therajatdua" target="_blank" rel="noopener noreferrer">@therajatdua</a>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="method-content">
                <h4>Location</h4>
                <span>Gwalior, MP, India</span>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h4>Follow my journey</h4>
            <div className="social-icons">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--color': social.color }}
                  title={`Follow me on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Send me a message</h3>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="firstName">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={contactForm.firstName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.firstName ? 'error' : ''}`}
                  placeholder="Your first name"
                />
                {errors.firstName && (
                  <span className="error-message">{errors.firstName}</span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="lastName">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={contactForm.lastName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.lastName ? 'error' : ''}`}
                  placeholder="Your last name"
                />
                {errors.lastName && (
                  <span className="error-message">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={contactForm.phoneNumber}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="+91 12345 67890"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="topic">
                What's this about?
              </label>
              <select
                id="topic"
                name="topic"
                value={contactForm.topic}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select a topic</option>
                <option value="web-development">Web Development Project</option>
                <option value="content-collaboration">Content Collaboration</option>
                <option value="freelance-work">Freelance Work</option>
                <option value="mentorship">Mentorship</option>
                <option value="general">General Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                placeholder="Tell me about your project or idea..."
                rows="5"
              />
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className={`btn btn-primary btn-lg submit-btn ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                </svg>
              )}
            </button>

            {submitMessage && (
              <div className={`submit-message ${submitMessage.includes('success') ? 'success' : 'error'}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
