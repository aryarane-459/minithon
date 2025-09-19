import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Modern dormitory building"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Your Perfect
            <span className="gradient-text"> Student Home</span>
            <br />
            Awaits
          </h1>
          <p className="hero-subtitle">
            Discover premium dormitory living with modern amenities, vibrant community, 
            and unbeatable locations. Find your ideal room today.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Residents</div>
            </div>
            <div className="stat">
              <div className="stat-number">4.8</div>
              <div className="stat-label">
                <div className="flex items-center gap-1">
                  <Star className="star-filled" size={16} />
                  Rating
                </div>
              </div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
          
          <div className="hero-buttons">
            <a href="#rooms" className="btn btn-primary">
              Browse Rooms
              <ArrowRight size={20} />
            </a>
            <a href="#gallery" className="btn btn-outline">
              Virtual Tour
            </a>
          </div>
        </motion.div>
        
        <motion.div
          className="hero-features"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="feature-card">
            <Users className="feature-icon" />
            <h3>Community Living</h3>
            <p>Join a vibrant community of students from around the world</p>
          </div>
          <div className="feature-card">
            <MapPin className="feature-icon" />
            <h3>Prime Locations</h3>
            <p>Walking distance to universities and city center</p>
          </div>
          <div className="feature-card">
            <Star className="feature-icon" />
            <h3>Premium Amenities</h3>
            <p>Fully furnished rooms with high-speed WiFi and utilities</p>
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }
        
        .hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.8), rgba(16, 185, 129, 0.6));
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          padding-top: 6rem;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: white;
          margin-bottom: 1.5rem;
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #f59e0b, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 0.25rem;
        }
        
        .star-filled {
          color: #f59e0b;
          fill: #f59e0b;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
        }
        
        .hero-features {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .feature-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1rem;
          padding: 1.5rem;
          color: white;
        }
        
        .feature-icon {
          color: #f59e0b;
          margin-bottom: 0.5rem;
        }
        
        .feature-card h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .feature-card p {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-stats {
            justify-content: center;
          }
          
          .hero-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;