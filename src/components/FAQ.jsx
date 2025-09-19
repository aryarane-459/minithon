import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, Home, CreditCard, Users, Settings } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState(new Set([1])); // First item open by default

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'booking', name: 'Booking & Pricing', icon: CreditCard },
    { id: 'facilities', name: 'Facilities & Amenities', icon: Home },
    { id: 'community', name: 'Community & Living', icon: Users },
    { id: 'policies', name: 'Policies & Rules', icon: Settings }
  ];

  const faqs = [
    {
      id: 1,
      category: 'booking',
      question: 'How do I book a room?',
      answer: 'Booking is simple! Browse our available rooms, select your preferred option, and click "Book Now". You\'ll need to provide basic information and pay a security deposit to secure your room. Our team will contact you within 24 hours to confirm your booking and arrange move-in details.'
    },
    {
      id: 2,
      category: 'booking',
      question: 'What is included in the monthly rent?',
      answer: 'Monthly rent includes all utilities (electricity, water, heating/cooling), high-speed WiFi, access to all common areas and amenities, weekly housekeeping for common areas, 24/7 security, and maintenance services. Furniture is included in furnished rooms.'
    },
    {
      id: 3,
      category: 'booking',
      question: 'Is there a security deposit required?',
      answer: 'Yes, we require a refundable security deposit equal to one month\'s rent. This deposit is fully refundable upon move-out, provided there\'s no damage to the room or common areas beyond normal wear and tear.'
    },
    {
      id: 4,
      category: 'facilities',
      question: 'What amenities are available?',
      answer: 'Our facilities include a modern fitness center, study lounges with quiet zones, communal kitchens, laundry facilities, recreational rooms with gaming consoles, outdoor courtyard, bike storage, package reception, and 24/7 front desk services.'
    },
    {
      id: 5,
      category: 'facilities',
      question: 'Is there parking available?',
      answer: 'Yes, we offer secure parking for residents at an additional monthly fee. Spaces are limited and assigned on a first-come, first-served basis. We also provide bike storage facilities free of charge.'
    },
    {
      id: 6,
      category: 'community',
      question: 'What is the community like?',
      answer: 'Our diverse community includes students from universities worldwide. We organize regular social events, study groups, cultural celebrations, and recreational activities. Our community guidelines ensure a respectful, inclusive environment for all residents.'
    },
    {
      id: 7,
      category: 'community',
      question: 'Can I choose my roommate?',
      answer: 'For shared rooms, you can request a specific roommate if you both apply together. Otherwise, our matching system considers lifestyle preferences, study habits, and compatibility factors to pair compatible roommates.'
    },
    {
      id: 8,
      category: 'policies',
      question: 'What is the minimum lease term?',
      answer: 'Our minimum lease term is one academic semester (approximately 4-5 months). We offer flexible options including semester-based and full academic year leases. Summer terms and shorter stays may be available based on room availability.'
    },
    {
      id: 9,
      category: 'policies',
      question: 'Are guests allowed?',
      answer: 'Day guests are welcome but must be registered at the front desk. Overnight guests are permitted for up to 3 consecutive nights per month with prior approval. Extended stays require special arrangements and may incur additional fees.'
    },
    {
      id: 10,
      category: 'policies',
      question: 'What happens if I need to cancel my lease early?',
      answer: 'Early lease termination is possible with 30 days written notice. A termination fee may apply depending on the timing and circumstances. We offer assistance in finding replacement tenants to minimize financial impact.'
    },
    {
      id: 11,
      category: 'facilities',
      question: 'Is there 24/7 maintenance support?',
      answer: 'Yes, we provide 24/7 emergency maintenance for urgent issues like plumbing leaks or heating/cooling failures. Non-emergency requests are handled during business hours, typically within 24-48 hours of submission.'
    },
    {
      id: 12,
      category: 'booking',
      question: 'Can international students apply?',
      answer: 'Absolutely! We welcome international students and provide additional support including visa document assistance, airport pickup services (for a fee), and orientation programs to help you settle in comfortably.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about living at DormLife
          </p>
        </motion.div>

        <div className="faq-controls">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <category.icon size={18} />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="faq-content">
          <motion.div
            className="faq-list"
            layout
          >
            <AnimatePresence>
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  className="faq-item"
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <span className="question-text">{faq.question}</span>
                    <div className="question-icon">
                      {openItems.has(faq.id) ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openItems.has(faq.id) && (
                      <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredFAQs.length === 0 && (
            <div className="no-results">
              <HelpCircle size={48} />
              <h3>No questions found</h3>
              <p>Try adjusting your search terms or selecting a different category.</p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        <motion.div
          className="faq-contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Still have questions?</h3>
          <p>Our friendly staff is here to help you with any additional questions or concerns.</p>
          <div className="contact-options">
            <a href="#contact" className="btn btn-primary">Contact Us</a>
            <a href="tel:+15551234567" className="btn btn-outline">Call Now</a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .faq-controls {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .search-container {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
          width: 100%;
        }
        
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
        }
        
        .search-input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 2px solid #e5e7eb;
          border-radius: 2rem;
          font-size: 1rem;
          background: white;
          transition: border-color 0.3s ease;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        
        .category-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .category-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: 2px solid #e5e7eb;
          background: white;
          color: #6b7280;
          border-radius: 2rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .category-btn:hover {
          border-color: #2563eb;
          color: #2563eb;
        }
        
        .category-btn.active {
          background: #2563eb;
          border-color: #2563eb;
          color: white;
        }
        
        .faq-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .faq-item {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          border: 1px solid #f3f4f6;
          overflow: hidden;
        }
        
        .faq-question {
          width: 100%;
          padding: 1.5rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background-color 0.3s ease;
        }
        
        .faq-question:hover {
          background: #f8fafc;
        }
        
        .question-text {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
          flex: 1;
          text-align: left;
        }
        
        .question-icon {
          background: #eff6ff;
          color: #2563eb;
          border-radius: 50%;
          padding: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .faq-item:hover .question-icon {
          background: #2563eb;
          color: white;
        }
        
        .faq-answer {
          overflow: hidden;
        }
        
        .faq-answer p {
          padding: 0 1.5rem 1.5rem 1.5rem;
          margin: 0;
          color: #6b7280;
          line-height: 1.6;
          font-size: 1rem;
        }
        
        .no-results {
          text-align: center;
          padding: 3rem;
          color: #6b7280;
        }
        
        .no-results svg {
          color: #d1d5db;
          margin-bottom: 1rem;
        }
        
        .no-results h3 {
          font-size: 1.5rem;
          color: #374151;
          margin-bottom: 0.5rem;
        }
        
        .no-results p {
          margin-bottom: 2rem;
        }
        
        .faq-contact {
          text-align: center;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          padding: 3rem 2rem;
          border-radius: 1.5rem;
          margin-top: 3rem;
        }
        
        .faq-contact h3 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1rem;
        }
        
        .faq-contact p {
          color: #6b7280;
          font-size: 1.125rem;
          margin-bottom: 2rem;
        }
        
        .contact-options {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        @media (max-width: 768px) {
          .category-filters {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }
          
          .category-btn {
            flex-shrink: 0;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
          
          .question-text {
            font-size: 1rem;
            line-height: 1.4;
          }
          
          .faq-question,
          .faq-answer p {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .faq-contact {
            padding: 2rem 1rem;
          }
          
          .contact-options {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;