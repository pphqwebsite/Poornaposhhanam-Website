import React from "react";

export default function PeopleDisplay({ people }) {
  return (
    <div className="people-grid">
      {people.map(([image, name], idx) => (
        <div className="person-card" key={idx}>
          <img src={image} alt={name} className="person-image" />
          <div className="image-description">{name}</div>
        </div>
      ))}
    </div>
  );
}
