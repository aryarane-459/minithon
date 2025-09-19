import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Users, Wifi, Car, Utensils, Dumbbell, Calendar, Star } from 'lucide-react';

const RoomListings = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: 'all',
    availability: 'all'
  });
  
  useEffect(() => {
    // Simulate fetching room data
    const roomData = [
      {
        id: 1,
        type: 'Single',
        title: 'Premium Single Room',
        price: 450,
        image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400',
        amenities: ['WiFi', 'Private Bath', 'Desk', 'Wardrobe'],
        available: true,
        rating: 4.8,
        reviews: 24
      },
      {
        id: 2,
        type: 'Double',
        title: 'Shared Double Room',
        price: 320,
        image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400',
        amenities: ['WiFi', 'Shared Bath', 'Study Area', 'Storage'],
        available: true,
        rating: 4.6,
        reviews: 31
      },
      {
        id: 3,
        type: 'Suite',
        title: 'Deluxe Suite',
        price: 650,
        image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400',
        amenities: ['WiFi', 'Private Bath', 'Kitchen', 'Living Area'],
        available: false,
        rating: 4.9,
        reviews: 18
      },
      {
        id: 4,
        type: 'Studio',
        title: 'Modern Studio',
        price: 580,
        image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400',
        amenities: ['WiFi', 'Private Bath', 'Kitchenette', 'Balcony'],
        available: true,
        rating: 4.7,
        reviews: 15
      },
      {
        id: 5,
        type: 'Single',
        title: 'Standard Single Room',
        price: 380,
        image: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=400',
        amenities: ['WiFi', 'Shared Bath', 'Desk', 'Wardrobe'],
        available: true,
        rating: 4.5,
        reviews: 42
      },
      {
        id: 6,
        type: 'Double',
        title: 'Economy Double',
        price: 280,
        image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400',
        amenities: ['WiFi', 'Shared Bath', 'Study Desk'],
        available: true,
        rating: 4.3,
        reviews: 28
      }
    ];
    
    setRooms(roomData);
    setFilteredRooms(roomData);
  }, []);
  
  useEffect(() => {
    let filtered = rooms;
    
    if (filters.type !== 'all') {
      filtered = filtered.filter(room => room.type.toLowerCase() === filters.type);
    }
    
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(room => room.price >= min && room.price <= max);
    }
    
    if (filters.availability !== 'all') {
      filtered = filtered.filter(room => 
        filters.availability === 'available' ? room.available : !room.available
      );
    }
    
    setFilteredRooms(filtered);
  }, [filters, rooms]);
  
  const amenityIcons = {
    'WiFi': Wifi,
    'Private Bath': Users,
    'Shared Bath': Users,
    'Kitchen': Utensils,
    'Kitchenette': Utensils,
    'Desk': Calendar,
    'Study Area': Calendar,
    'Study Desk': Calendar,
    'Gym': Dumbbell,
    'Parking': Car
  };
  
  return (
    <section id="rooms" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Available Rooms</h2>
          <p className="section-subtitle">
            Choose from our variety of comfortable and affordable living spaces
          </p>
        </motion.div>
        
        <div className="filters">
          <div className="filter-group">
            <Filter size={20} />
            <span className="filter-label">Filters:</span>
            
            <select
              value={filters.type}
              onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
              className="filter-select"
            >
              <option value="all">All Types</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
              <option value="studio">Studio</option>
            </select>
            
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
              className="filter-select"
            >
              <option value="all">All Prices</option>
              <option value="0-350">$0 - $350</option>
              <option value="350-500">$350 - $500</option>
              <option value="500-999">$500+</option>
            </select>
            
            <select
              value={filters.availability}
              onChange={(e) => setFilters(prev => ({ ...prev, availability: e.target.value }))}
              className="filter-select"
            >
              <option value="all">All Rooms</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
        </div>
        
        <div className="rooms-grid">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              className="room-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="room-image">
                <img src={room.image} alt={room.title} />
                <div className={`availability-badge ${room.available ? 'available' : 'unavailable'}`}>
                  {room.available ? 'Available' : 'Unavailable'}
                </div>
              </div>
              
              <div className="room-content">
                <div className="room-header">
                  <h3 className="room-title">{room.title}</h3>
                  <div className="room-rating">
                    <Star className="star-filled" size={16} />
                    <span>{room.rating}</span>
                    <span className="review-count">({room.reviews})</span>
                  </div>
                </div>
                
                <div className="room-type">{room.type} Room</div>
                
                <div className="room-amenities">
                  {room.amenities.slice(0, 4).map((amenity) => {
                    const IconComponent = amenityIcons[amenity] || Calendar;
                    return (
                      <div key={amenity} className="amenity">
                        <IconComponent size={16} />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="room-footer">
                  <div className="room-price">
                    <span className="price">${room.price}</span>
                    <span className="period">/month</span>
                  </div>
                  <button
                    className={`btn ${room.available ? 'btn-primary' : 'btn-disabled'}`}
                    disabled={!room.available}
                  >
                    {room.available ? 'Book Now' : 'Waitlist'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredRooms.length === 0 && (
          <div className="no-results">
            <p>No rooms match your current filters. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .filters {
          margin-bottom: 3rem;
        }
        
        .filter-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .filter-label {
          font-weight: 600;
          color: #374151;
        }
        
        .filter-select {
          padding: 0.5rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          background: white;
          cursor: pointer;
          transition: border-color 0.3s ease;
        }
        
        .filter-select:focus {
          outline: none;
          border-color: #2563eb;
        }
        
        .rooms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .room-card {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .room-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .room-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .room-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .room-card:hover .room-image img {
          transform: scale(1.05);
        }
        
        .availability-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        .availability-badge.available {
          background: #10b981;
          color: white;
        }
        
        .availability-badge.unavailable {
          background: #ef4444;
          color: white;
        }
        
        .room-content {
          padding: 1.5rem;
        }
        
        .room-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 0.5rem;
        }
        
        .room-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }
        
        .room-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          color: #6b7280;
        }
        
        .star-filled {
          color: #f59e0b;
          fill: #f59e0b;
        }
        
        .review-count {
          color: #9ca3af;
        }
        
        .room-type {
          display: inline-block;
          background: #eff6ff;
          color: #2563eb;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .room-amenities {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        
        .amenity {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #6b7280;
        }
        
        .amenity svg {
          color: #10b981;
        }
        
        .room-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .room-price {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
        }
        
        .price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2563eb;
        }
        
        .period {
          font-size: 0.875rem;
          color: #6b7280;
        }
        
        .btn-disabled {
          background: #9ca3af;
          color: white;
          cursor: not-allowed;
        }
        
        .btn-disabled:hover {
          background: #9ca3af;
          transform: none;
          box-shadow: none;
        }
        
        .no-results {
          text-align: center;
          padding: 3rem;
          color: #6b7280;
          font-size: 1.125rem;
        }
        
        @media (max-width: 768px) {
          .rooms-grid {
            grid-template-columns: 1fr;
          }
          
          .filter-group {
            flex-direction: column;
            align-items: stretch;
          }
          
          .filter-select {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default RoomListings;