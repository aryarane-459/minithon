import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Home,
  Users,
  CreditCard,
  HelpCircle,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Room Listings', href: '#rooms' },
      { name: 'Photo Gallery', href: '#gallery' },
      { name: 'Location Map', href: '#location' },
      { name: 'Testimonials', href: '#reviews' }
    ],
    support: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Help Center', href: '#' },
      { name: 'Live Chat', href: '#' }
    ],
    legal: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Lease Agreement', href: '#' },
      { name: 'House Rules', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="brand-name">DormLife</h3>
            <p className="brand-description">
              Your perfect student home away from home. Comfortable, affordable, 
              and connected to everything that matters.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>123 University Avenue, College Town, ST 12345</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@dormlife.com</span>
              </div>
            </div>

            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="link-column">
              <h4>Services</h4>
              <ul>
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4>Legal</h4>
              <ul>
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="footer-newsletter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Stay Updated</h4>
            <p>Get the latest news about new rooms and community events.</p>
            
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>

            <div className="quick-stats">
              <div className="stat">
                <Home className="stat-icon" />
                <div>
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Rooms</span>
                </div>
              </div>
              <div className="stat">
                <Users className="stat-icon" />
                <div>
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Residents</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 DormLife. All rights reserved. Built with ❤️ for students.
            </p>
            
            <button className="scroll-to-top" onClick={scrollToTop}>
              <ArrowUp size={20} />
              Back to Top
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #1f2937, #111827);
          color: white;
          padding: 4rem 0 0;
          margin-top: 5rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 2fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-brand {
          max-width: 400px;
        }
        
        .brand-name {
          font-size: 2rem;
          font-weight: 700;
          color: #3b82f6;
          margin-bottom: 1rem;
        }
        
        .brand-description {
          color: #d1d5db;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #d1d5db;
          font-size: 0.875rem;
        }
        
        .contact-item svg {
          color: #3b82f6;
          flex-shrink: 0;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 50%;
          color: #3b82f6;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-link:hover {
          background: #3b82f6;
          color: white;
          transform: translateY(-2px);
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        .link-column h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          margin-bottom: 1rem;
        }
        
        .link-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .link-column li {
          margin-bottom: 0.75rem;
        }
        
        .link-column a {
          color: #d1d5db;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }
        
        .link-column a:hover {
          color: #3b82f6;
        }
        
        .footer-newsletter h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
        }
        
        .footer-newsletter p {
          color: #d1d5db;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        
        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        
        .newsletter-input {
          padding: 0.75rem;
          border: 2px solid rgba(75, 85, 99, 0.3);
          border-radius: 0.5rem;
          background: rgba(31, 41, 55, 0.5);
          color: white;
          font-size: 0.875rem;
          transition: border-color 0.3s ease;
        }
        
        .newsletter-input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .newsletter-input::placeholder {
          color: #9ca3af;
        }
        
        .newsletter-btn {
          padding: 0.75rem 1rem;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .newsletter-btn:hover {
          background: #2563eb;
        }
        
        .quick-stats {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .stat {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .stat-icon {
          color: #3b82f6;
          flex-shrink: 0;
        }
        
        .stat-number {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          display: block;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.75rem;
          color: #9ca3af;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(75, 85, 99, 0.3);
          padding: 2rem 0;
        }
        
        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .copyright {
          color: #9ca3af;
          font-size: 0.875rem;
          margin: 0;
        }
        
        .scroll-to-top {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: 2px solid rgba(59, 130, 246, 0.3);
          color: #3b82f6;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .scroll-to-top:hover {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 0;
            margin-top: 3rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
          
          .contact-info {
            gap: 0.75rem;
          }
          
          .contact-item {
            font-size: 0.75rem;
          }
          
          .social-links {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .footer-links {
            grid-template-columns: 1fr;
          }
          
          .social-links {
            gap: 0.75rem;
          }
          
          .social-link {
            width: 2rem;
            height: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;