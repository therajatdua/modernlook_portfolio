import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Get EmailJS credentials from environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
        form.current.reset();
      }, (error) => {
        console.log('FAILED...', error.text);
        setSubmitMessage('Failed to send message. Please try again or contact me directly.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="contact--header">
        <div className="contact--header-content">
          <p className="sub--title">Get In Touch</p>
          <h2 className="contact--main-title">Contact Me</h2>
          <p className="contact--description">
            Write for Concern/ Work/ Collab !
          </p>
        </div>
        <div className="contact--decorative-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </div>
      
      <div className="contact--form-wrapper">
        <form ref={form} onSubmit={sendEmail} className="contact--form--container">
          <div className="form-grid">
            <div className="input-group">
              <label htmlFor="first-name" className="contact--label">
                <span className="label-text">First Name</span>
                <input
                  type="text"
                  className="contact--input"
                  name="first_name"
                  id="first-name"
                  required
                />
                <div className="input-focus-line"></div>
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="last-name" className="contact--label">
                <span className="label-text">Last Name</span>
                <input
                  type="text"
                  className="contact--input"
                  name="last_name"
                  id="last-name"
                  required
                />
                <div className="input-focus-line"></div>
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="email" className="contact--label">
                <span className="label-text">Email</span>
                <input
                  type="email"
                  className="contact--input"
                  name="user_email"
                  id="email"
                  required
                />
                <div className="input-focus-line"></div>
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="phone-number" className="contact--label">
                <span className="label-text">Phone Number</span>
                <input
                  type="tel"
                  className="contact--input"
                  name="phone_number"
                  id="phone-number"
                  required
                />
                <div className="input-focus-line"></div>
              </label>
            </div>
          </div>
          
          <div className="input-group full-width">
            <label htmlFor="choose-topic" className="contact--label">
              <span className="label-text">Choose a topic</span>
              <select id="choose-topic" name="topic" className="contact--input contact--select" required>
                <option value="">Select One...</option>
                <option value="Work Opportunity">Work Opportunity</option>
                <option value="Collaboration">Collaboration</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Other">Other</option>
              </select>
              <div className="input-focus-line"></div>
            </label>
          </div>
          
          <div className="input-group full-width">
            <label htmlFor="message" className="contact--label">
              <span className="label-text">Message</span>
              <textarea
                className="contact--input contact--textarea"
                id="message"
                name="message"
                rows="6"
                placeholder="Type your message..."
                required
              />
              <div className="input-focus-line"></div>
            </label>
          </div>
          
          <div className="checkbox-group">
            <label htmlFor="checkbox" className="checkbox--label">
              <input type="checkbox" required name="checkbox" id="checkbox" />
              <span className="checkmark"></span>
              <span className="checkbox-text">I accept the terms</span>
            </label>
          </div>
          
          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('successfully') ? 'success' : 'error'}`}>
              <div className="message-icon">
                {submitMessage.includes('successfully') ? '✓' : '✗'}
              </div>
              <span>{submitMessage}</span>
            </div>
          )}
          
          <div className="submit-button-wrapper">
            <button 
              type="submit" 
              className="btn-modern contact--form--btn"
              disabled={isSubmitting}
            >
              <span className="btn-text">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <div className="btn-shine"></div>
              <div className="btn-ripple"></div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
