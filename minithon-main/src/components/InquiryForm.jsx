import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    roomType: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'general',
        roomType: '',
        message: '',
        preferredContact: 'email'
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section">
        <div className="container">
          <motion.div
            className="success-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <CheckCircle className="success-icon" />
            <h2>Thank You!</h2>
            <p>Your inquiry has been received. We'll get back to you within 24 hours.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions? We're here to help you find your perfect room
          </p>
        </motion.div>

        <div className="inquiry-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <Phone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                  <span className="availability">Available 24/7</span>
                </div>
              </div>
              
              <div className="contact-method">
                <Mail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>info@dormlife.com</p>
                  <span className="availability">Response within 4 hours</span>
                </div>
              </div>
              
              <div className="contact-method">
                <MessageSquare className="contact-icon" />
                <div>
                  <h4>Live Chat</h4>
                  <p>Chat with our team</p>
                  <span className="availability">Mon-Fri, 9AM-6PM</span>
                </div>
              </div>
            </div>

            <div className="office-hours">
              <h4>Office Hours</h4>
              <div className="hours-grid">
                <div>Monday - Friday</div>
                <div>9:00 AM - 6:00 PM</div>
                <div>Saturday</div>
                <div>10:00 AM - 4:00 PM</div>
                <div>Sunday</div>
                <div>Closed</div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="inquiry-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Preferred Contact Method</label>
                <select
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="text">Text Message</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Inquiry Type</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="general">General Information</option>
                  <option value="booking">Room Booking</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="amenities">Amenities</option>
                  <option value="tour">Schedule a Tour</option>
                  <option value="maintenance">Maintenance Request</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Room Type Interest</label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select room type</option>
                  <option value="single">Single Room</option>
                  <option value="double">Double Room</option>
                  <option value="suite">Suite</option>
                  <option value="studio">Studio</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                required
                placeholder="Tell us about your needs, questions, or any specific requirements..."
                rows={6}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <style jsx>{`
        .inquiry-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .contact-info {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          padding: 2.5rem;
          border-radius: 1.5rem;
          height: fit-content;
        }
        
        .contact-info h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }
        
        .contact-methods {
          margin-bottom: 2rem;
        }
        
        .contact-method {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          backdrop-filter: blur(10px);
        }
        
        .contact-icon {
          color: #f59e0b;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
        
        .contact-method h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        
        .contact-method p {
          font-size: 0.875rem;
          opacity: 0.9;
          margin-bottom: 0.25rem;
        }
        
        .availability {
          font-size: 0.75rem;
          color: #f59e0b;
          font-weight: 500;
        }
        
        .office-hours h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .hours-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          font-size: 0.875rem;
        }
        
        .hours-grid div:nth-child(odd) {
          font-weight: 600;
        }
        
        .hours-grid div:nth-child(even) {
          opacity: 0.9;
        }
        
        .inquiry-form {
          background: white;
          padding: 2.5rem;
          border-radius: 1.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .form-submit {
          width: 100%;
          justify-content: center;
          padding: 1rem 2rem;
          font-size: 1.125rem;
        }
        
        .form-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .success-message {
          text-align: center;
          background: white;
          padding: 3rem;
          border-radius: 1.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          margin: 0 auto;
        }
        
        .success-icon {
          color: #10b981;
          width: 4rem;
          height: 4rem;
          margin: 0 auto 1.5rem;
        }
        
        .success-message h2 {
          color: #1f2937;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .success-message p {
          color: #6b7280;
          font-size: 1.125rem;
        }
        
        @media (max-width: 768px) {
          .inquiry-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .contact-info,
          .inquiry-form {
            padding: 1.5rem;
          }
          
          .contact-method {
            padding: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default InquiryForm;