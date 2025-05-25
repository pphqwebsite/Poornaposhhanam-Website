import React from "react";

export default function ImageDisplay({ people, simpleDisplay = false }) {
  return (
    <div className="people-grid">
      {people.map((item, idx) => {
        if (simpleDisplay) {
          return (
            <div className="person-card" key={idx}>
              <img src={item} alt="Logo" className="person-image" />
            </div>
          );
        }
        const [image, name, position] = item;
        return (
          <div className="person-card" key={idx}>
            <img src={image} alt={name} className="person-image" />
            <div className="person-name">{name}</div>
            {position && <div className="person-position">{position}</div>}
          </div>
        );
      })}
    </div>
  );
}
