import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/style.css';

export default function NewsDisplay({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];
  const hasDescription = Array.isArray(currentItem) && currentItem.length > 1;

  return (
    <div className="news-display">
      <div className="news-carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        
        <div className="carousel-content">
          <div className="image-container">
            <img 
              src={Array.isArray(currentItem) ? currentItem[0] : currentItem} 
              alt={hasDescription ? currentItem[1] : "News item"}
              className="carousel-image"
            />
          </div>
          {hasDescription && (
            <p className="carousel-description">{currentItem[1]}</p>
          )}
        </div>

        <button className="carousel-button next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
} 