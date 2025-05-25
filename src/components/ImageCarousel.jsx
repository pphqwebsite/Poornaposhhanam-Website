import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setProgress(0);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 100);
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setProgress(0);
  };

  const [imageSrc, imageDescription] = images[currentIndex];

  return (
    <div className="carousel-container">
      <div className="image-carousel">
        <button className="carousel-nav prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        
        <div className="carousel-image-container">
          <img 
            src={imageSrc} 
            alt={`Slide ${currentIndex + 1}`} 
            className="carousel-image"
          />
        </div>
        
        <button className="carousel-nav next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      <div className="carousel-progress">
        <div 
          className="progress-bar" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="image-description">{imageDescription}</p>
    </div>
  );
}
