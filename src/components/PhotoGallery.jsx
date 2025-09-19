import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3x3 } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'common', name: 'Common Areas' },
    { id: 'amenities', name: 'Amenities' },
    { id: 'exterior', name: 'Exterior' }
  ];

  const photos = [
    {
      id: 1,
      category: 'rooms',
      title: 'Premium Single Room',
      url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      category: 'common',
      title: 'Study Lounge',
      url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      category: 'amenities',
      title: 'Fitness Center',
      url: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      category: 'exterior',
      title: 'Building Exterior',
      url: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      category: 'rooms',
      title: 'Double Room',
      url: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      category: 'common',
      title: 'Kitchen Area',
      url: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      category: 'amenities',
      title: 'Laundry Room',
      url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      category: 'common',
      title: 'Recreation Room',
      url: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 9,
      category: 'exterior',
      title: 'Courtyard',
      url: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (photo, index) => {
    setSelectedImage(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredPhotos[nextIndex]);
  };

  const previousImage = () => {
    const prevIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredPhotos[prevIndex]);
  };

  return (
    <section id="gallery" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-subtitle">
            Take a virtual tour of our beautiful facilities and living spaces
          </p>
        </motion.div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div
          className="photo-grid"
          layout
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="photo-item"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                onClick={() => openLightbox(photo, index)}
              >
                <img src={photo.url} alt={photo.title} />
                <div className="photo-overlay">
                  <ZoomIn className="zoom-icon" />
                  <h3 className="photo-title">{photo.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="lightbox-close" onClick={closeLightbox}>
                  <X size={24} />
                </button>
                
                <button className="lightbox-nav prev" onClick={previousImage}>
                  <ChevronLeft size={24} />
                </button>
                
                <img src={selectedImage.url} alt={selectedImage.title} />
                
                <button className="lightbox-nav next" onClick={nextImage}>
                  <ChevronRight size={24} />
                </button>
                
                <div className="lightbox-info">
                  <h3>{selectedImage.title}</h3>
                  <p>{currentIndex + 1} of {filteredPhotos.length}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .gallery-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        
        .filter-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid #e5e7eb;
          background: white;
          color: #6b7280;
          border-radius: 2rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .filter-btn:hover {
          border-color: #2563eb;
          color: #2563eb;
        }
        
        .filter-btn.active {
          background: #2563eb;
          border-color: #2563eb;
          color: white;
        }
        
        .photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        
        .photo-item {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 1rem;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .photo-item:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .photo-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .photo-item:hover img {
          transform: scale(1.05);
        }
        
        .photo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .photo-item:hover .photo-overlay {
          opacity: 1;
        }
        
        .zoom-icon {
          color: white;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.75rem;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }
        
        .photo-title {
          color: white;
          font-size: 1.125rem;
          font-weight: 600;
          text-align: center;
          margin: 0;
        }
        
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }
        
        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .lightbox-content img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 0.5rem;
        }
        
        .lightbox-close {
          position: absolute;
          top: -3rem;
          right: 0;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          padding: 0.75rem;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          padding: 1rem;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .lightbox-nav:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .lightbox-nav.prev {
          left: -4rem;
        }
        
        .lightbox-nav.next {
          right: -4rem;
        }
        
        .lightbox-info {
          margin-top: 1rem;
          text-align: center;
          color: white;
        }
        
        .lightbox-info h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .lightbox-info p {
          color: rgba(255, 255, 255, 0.7);
        }
        
        @media (max-width: 768px) {
          .photo-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
          }
          
          .lightbox-nav {
            display: none;
          }
          
          .lightbox-overlay {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PhotoGallery;