import React, { useState, useEffect } from 'react';
import { Menu, X, Home, MapPin, MessageSquare, Users, HelpCircle, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Rooms', href: '#rooms', icon: Home },
    { name: 'Gallery', href: '#gallery', icon: Camera },
    { name: 'Location', href: '#location', icon: MapPin },
    { name: 'Reviews', href: '#reviews', icon: Users },
    { name: 'Contact', href: '#contact', icon: MessageSquare },
    { name: 'FAQ', href: '#faq', icon: HelpCircle }
  ];

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <h2>DormLife</h2>
          </div>
          
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                <item.icon size={18} />
                {item.name}
              </a>
            ))}
          </div>
          
          <button className="btn btn-primary">Book Now</button>
          
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mobile-menu-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon size={18} />
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
      
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }
        
        .logo h2 {
          color: #2563eb;
          font-size: 1.75rem;
          font-weight: 700;
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #6b7280;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: #2563eb;
        }
        
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #6b7280;
        }
        
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .mobile-menu-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #6b7280;
          font-weight: 500;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .mobile-menu-link:hover {
          color: #2563eb;
          background: #f3f4f6;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-toggle {
            display: block;
          }
          
          .btn {
            display: none;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;