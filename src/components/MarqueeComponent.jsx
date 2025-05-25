import React from 'react';
import '../styles/style.css';

export default function MarqueeComponent({ items }) {
  return (
    <div className="news-marquee">
      <div className="marquee-content">
        {items.map((item, index) => (
          <span key={index} className="news-item">
            • {item}
          </span>
        ))}
      </div>
    </div>
  );
} 