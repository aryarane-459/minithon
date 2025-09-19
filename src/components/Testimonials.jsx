import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Verified } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Computer Science Student',
      university: 'State University',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      review: "Living at DormLife has been incredible! The community is amazing, the rooms are modern and clean, and the location couldn't be better. I'm walking distance from all my classes and the staff is super helpful.",
      verified: true,
      moveInDate: 'August 2024'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      role: 'Graduate Student',
      university: 'Tech Institute',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      review: "The best decision I made was choosing DormLife. The study spaces are perfect for my research, high-speed internet never fails, and I've made lifelong friends here. The amenities are top-notch!",
      verified: true,
      moveInDate: 'January 2024'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'International Student',
      university: 'Business College',
      rating: 4,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      review: "As an international student, I was worried about finding a safe and welcoming place. DormLife exceeded all my expectations. The multicultural community made me feel at home right away.",
      verified: true,
      moveInDate: 'September 2023'
    },
    {
      id: 4,
      name: 'Alex Thompson',
      role: 'Engineering Student',
      university: 'State University',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150',
      review: "The maintenance team is fantastic - any issues are resolved within hours. The gym is well-equipped, and the common areas are perfect for studying and socializing. Couldn't ask for more!",
      verified: true,
      moveInDate: 'May 2024'
    },
    {
      id: 5,
      name: 'Priya Patel',
      role: 'Medical Student',
      university: 'Health Sciences',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      review: "The quiet study areas and 24/7 access are perfect for my demanding schedule. The location near the hospital for my rotations is incredibly convenient. Highly recommend DormLife!",
      verified: true,
      moveInDate: 'June 2024'
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  const calculateAverageRating = () => {
    const total = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0);
    return (total / testimonials.length).toFixed(1);
  };

  return (
    <section id="reviews" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">What Our Residents Say</h2>
          <div className="testimonials-stats">
            <div className="stat">
              <div className="rating-display">
                <span className="rating-number">{calculateAverageRating()}</span>
                <div className="rating-stars">
                  {renderStars(Math.round(parseFloat(calculateAverageRating())))}
                </div>
              </div>
              <p>Average Rating</p>
            </div>
            <div className="stat">
              <span className="stat-number">{testimonials.length}</span>
              <p>Verified Reviews</p>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>

        <div className="testimonials-container">
          <div className="testimonials-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card main-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <Quote className="quote-icon" />
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonials[currentIndex].review}</p>
                  
                  <div className="testimonial-author">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name}
                      className="author-avatar"
                    />
                    <div className="author-info">
                      <div className="author-name-line">
                        <h4>{testimonials[currentIndex].name}</h4>
                        {testimonials[currentIndex].verified && (
                          <Verified className="verified-icon" />
                        )}
                      </div>
                      <p className="author-role">{testimonials[currentIndex].role}</p>
                      <p className="author-university">{testimonials[currentIndex].university}</p>
                      <div className="testimonial-meta">
                        <div className="rating">
                          {renderStars(testimonials[currentIndex].rating)}
                        </div>
                        <span className="move-in-date">
                          Resident since {testimonials[currentIndex].moveInDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="testimonials-navigation">
              <button 
                className="nav-btn prev"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="testimonials-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                className="nav-btn next"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="testimonials-sidebar">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`testimonial-preview ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: index !== currentIndex ? 1.02 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="preview-avatar"
                />
                <div className="preview-content">
                  <div className="preview-name">
                    {testimonial.name}
                    {testimonial.verified && <Verified size={12} className="verified-small" />}
                  </div>
                  <div className="preview-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="preview-text">
                    {testimonial.review.substring(0, 80)}...
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 3rem;
          padding: 2rem;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          border-radius: 1rem;
        }
        
        .stat {
          text-align: center;
        }
        
        .rating-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .rating-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2563eb;
          line-height: 1;
        }
        
        .rating-stars {
          display: flex;
          gap: 0.25rem;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2563eb;
          display: block;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
        .stat p {
          color: #6b7280;
          font-weight: 500;
          margin: 0;
        }
        
        .testimonials-container {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 2rem;
        }
        
        .testimonials-wrapper {
          position: relative;
        }
        
        .testimonial-card {
          background: white;
          padding: 3rem;
          border-radius: 1.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          position: relative;
          min-height: 400px;
        }
        
        .quote-icon {
          position: absolute;
          top: 2rem;
          right: 2rem;
          color: #2563eb;
          opacity: 0.2;
          width: 3rem;
          height: 3rem;
        }
        
        .testimonial-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .testimonial-text {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #374151;
          margin-bottom: 2rem;
          font-style: italic;
        }
        
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .author-avatar {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #e5e7eb;
        }
        
        .author-name-line {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
        }
        
        .author-info h4 {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }
        
        .verified-icon {
          color: #10b981;
          width: 1rem;
          height: 1rem;
        }
        
        .author-role {
          font-size: 0.875rem;
          color: #2563eb;
          font-weight: 600;
          margin: 0 0 0.25rem 0;
        }
        
        .author-university {
          font-size: 0.875rem;
          color: #6b7280;
          margin: 0 0 0.75rem 0;
        }
        
        .testimonial-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .rating {
          display: flex;
          gap: 0.125rem;
        }
        
        .star-filled {
          color: #f59e0b;
          fill: #f59e0b;
        }
        
        .star-empty {
          color: #e5e7eb;
        }
        
        .move-in-date {
          font-size: 0.75rem;
          color: #9ca3af;
        }
        
        .testimonials-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
        }
        
        .nav-btn {
          background: white;
          border: 2px solid #e5e7eb;
          color: #6b7280;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .nav-btn:hover {
          border-color: #2563eb;
          color: #2563eb;
          transform: translateY(-2px);
        }
        
        .testimonials-dots {
          display: flex;
          gap: 0.75rem;
        }
        
        .dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          border: none;
          background: #e5e7eb;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .dot.active {
          background: #2563eb;
          transform: scale(1.2);
        }
        
        .testimonials-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .testimonial-preview {
          display: flex;
          gap: 0.75rem;
          padding: 1rem;
          background: white;
          border-radius: 0.75rem;
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .testimonial-preview:hover {
          border-color: #e5e7eb;
        }
        
        .testimonial-preview.active {
          border-color: #2563eb;
          background: #eff6ff;
        }
        
        .preview-avatar {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }
        
        .preview-content {
          flex: 1;
          min-width: 0;
        }
        
        .preview-name {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.25rem;
        }
        
        .verified-small {
          color: #10b981;
        }
        
        .preview-rating {
          display: flex;
          gap: 0.125rem;
          margin-bottom: 0.5rem;
        }
        
        .preview-rating .star-filled,
        .preview-rating .star-empty {
          width: 0.75rem;
          height: 0.75rem;
        }
        
        .preview-text {
          font-size: 0.75rem;
          color: #6b7280;
          line-height: 1.4;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .testimonials-stats {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
          
          .testimonials-container {
            grid-template-columns: 1fr;
          }
          
          .testimonial-card {
            padding: 2rem;
            min-height: 350px;
          }
          
          .testimonials-sidebar {
            display: none;
          }
          
          .quote-icon {
            width: 2rem;
            height: 2rem;
          }
          
          .testimonial-author {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
          
          .testimonial-meta {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;