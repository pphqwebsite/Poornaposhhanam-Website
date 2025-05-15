import React, { useState, useEffect } from "react";

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const [imageSrc, imageDescription] = images[currentIndex];

  return (
    <>
      <div className="image-carousel" onClick={handleImageClick}>
        <img src={imageSrc} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <p className="image-description">{imageDescription}</p>
    </>
  );
}
