import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Bus, Train, Car, Coffee, ShoppingBag, GraduationCap, Hospital } from 'lucide-react';

const MapSection = () => {
  const [selectedLandmark, setSelectedLandmark] = useState(null);

  const landmarks = [
    {
      id: 1,
      name: 'State University',
      type: 'university',
      distance: '0.3 miles',
      walkTime: '5 minutes',
      icon: GraduationCap,
      color: '#2563eb'
    },
    {
      id: 2,
      name: 'Downtown Mall',
      type: 'shopping',
      distance: '0.8 miles',
      walkTime: '12 minutes',
      icon: ShoppingBag,
      color: '#10b981'
    },
    {
      id: 3,
      name: 'City Hospital',
      type: 'medical',
      distance: '1.2 miles',
      walkTime: '15 minutes',
      icon: Hospital,
      color: '#ef4444'
    },
    {
      id: 4,
      name: 'Central Cafe',
      type: 'dining',
      distance: '0.2 miles',
      walkTime: '3 minutes',
      icon: Coffee,
      color: '#f59e0b'
    }
  ];

  const transport = [
    {
      id: 1,
      type: 'Bus Stop',
      name: 'Main Street Station',
      distance: '100m',
      icon: Bus,
      routes: ['Route 15', 'Route 23', 'Route 41']
    },
    {
      id: 2,
      type: 'Train Station',
      name: 'Central Station',
      distance: '0.7 miles',
      icon: Train,
      routes: ['Blue Line', 'Red Line']
    },
    {
      id: 3,
      type: 'Parking',
      name: 'Resident Parking',
      distance: 'On-site',
      icon: Car,
      routes: ['24/7 Access', 'Security Monitored']
    }
  ];

  return (
    <section id="location" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Prime Location</h2>
          <p className="section-subtitle">
            Perfectly positioned in the heart of the city with easy access to everything you need
          </p>
        </motion.div>

        <div className="map-content">
          <motion.div
            className="map-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="map-placeholder">
              <img 
                src="https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Location map"
                className="map-image"
              />
              <div className="map-overlay">
                <div className="dormitory-marker">
                  <MapPin size={32} />
                  <span className="marker-label">DormLife</span>
                </div>
                
                {landmarks.map((landmark, index) => (
                  <motion.div
                    key={landmark.id}
                    className="landmark-marker"
                    style={{
                      top: `${20 + index * 15}%`,
                      left: `${30 + index * 20}%`,
                      color: landmark.color
                    }}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setSelectedLandmark(landmark)}
                  >
                    <landmark.icon size={20} />
                  </motion.div>
                ))}
              </div>
              
              <div className="map-controls">
                <button className="map-btn">
                  <Navigation size={16} />
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>

          <div className="location-info">
            <motion.div
              className="landmarks"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Nearby Landmarks</h3>
              <div className="landmarks-grid">
                {landmarks.map((landmark) => (
                  <div
                    key={landmark.id}
                    className={`landmark-card ${selectedLandmark?.id === landmark.id ? 'selected' : ''}`}
                    onClick={() => setSelectedLandmark(landmark)}
                  >
                    <div className="landmark-icon" style={{ color: landmark.color }}>
                      <landmark.icon size={24} />
                    </div>
                    <div className="landmark-details">
                      <h4>{landmark.name}</h4>
                      <div className="landmark-distance">
                        <span className="distance">{landmark.distance}</span>
                        <span className="walk-time">{landmark.walkTime} walk</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="transport"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Transportation</h3>
              <div className="transport-options">
                {transport.map((option) => (
                  <div key={option.id} className="transport-card">
                    <div className="transport-icon">
                      <option.icon size={24} />
                    </div>
                    <div className="transport-details">
                      <h4>{option.name}</h4>
                      <p className="transport-type">{option.type} • {option.distance}</p>
                      <div className="transport-routes">
                        {option.routes.map((route, index) => (
                          <span key={index} className="route-tag">{route}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="address-info"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Address</h3>
              <div className="address-card">
                <MapPin className="address-icon" />
                <div>
                  <p className="address">123 University Avenue</p>
                  <p className="city">College Town, ST 12345</p>
                  <p className="coordinates">40.7128° N, 74.0060° W</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .map-content {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        
        .map-container {
          position: relative;
          height: 500px;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .map-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .map-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(rgba(37, 99, 235, 0.1), rgba(37, 99, 235, 0.2));
        }
        
        .dormitory-marker {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #2563eb;
          color: white;
          padding: 0.75rem;
          border-radius: 50% 50% 50% 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
          z-index: 10;
        }
        
        .marker-label {
          font-size: 0.75rem;
          font-weight: 600;
          margin-top: 0.25rem;
          white-space: nowrap;
        }
        
        .landmark-marker {
          position: absolute;
          background: white;
          border-radius: 50%;
          padding: 0.5rem;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }
        
        .landmark-marker:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        
        .map-controls {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
        }
        
        .map-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          border: none;
          padding: 0.75rem 1rem;
          border-radius: 2rem;
          font-weight: 600;
          color: #2563eb;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .map-btn:hover {
          background: #2563eb;
          color: white;
          transform: translateY(-2px);
        }
        
        .location-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .location-info h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1rem;
        }
        
        .landmarks-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .landmark-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border-radius: 0.75rem;
          border: 2px solid #f3f4f6;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .landmark-card:hover,
        .landmark-card.selected {
          border-color: #2563eb;
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
        }
        
        .landmark-icon {
          background: #f8fafc;
          padding: 0.75rem;
          border-radius: 0.5rem;
        }
        
        .landmark-details h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.25rem;
        }
        
        .landmark-distance {
          display: flex;
          gap: 1rem;
          font-size: 0.875rem;
        }
        
        .distance {
          color: #2563eb;
          font-weight: 600;
        }
        
        .walk-time {
          color: #6b7280;
        }
        
        .transport-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .transport-card {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
        }
        
        .transport-icon {
          background: #eff6ff;
          color: #2563eb;
          padding: 0.75rem;
          border-radius: 0.5rem;
          flex-shrink: 0;
        }
        
        .transport-details h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.25rem;
        }
        
        .transport-type {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }
        
        .transport-routes {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .route-tag {
          background: #f3f4f6;
          color: #374151;
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .address-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          border-radius: 0.75rem;
        }
        
        .address-icon {
          color: #2563eb;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
        
        .address {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.25rem;
        }
        
        .city {
          color: #6b7280;
          margin-bottom: 0.25rem;
        }
        
        .coordinates {
          font-size: 0.875rem;
          color: #9ca3af;
          font-family: 'Courier New', monospace;
        }
        
        @media (max-width: 768px) {
          .map-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .map-container {
            height: 300px;
          }
          
          .dormitory-marker {
            padding: 0.5rem;
          }
          
          .marker-label {
            font-size: 0.625rem;
          }
          
          .landmark-marker {
            padding: 0.375rem;
          }
        }
      `}</style>
    </section>
  );
};

export default MapSection;