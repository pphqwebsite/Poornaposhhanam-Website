import React from "react";
import '../styles/style.css';

export default function ImageDisplay({ people, type = 'default' }) {
  return (
    <div className="people-grid">
      {people.map((person, index) => {
        const imagePath = Array.isArray(person) ? person[0] : person;
        const name = Array.isArray(person) ? person[1] : '';
        const position = Array.isArray(person) && person.length > 2 ? person[2] : '';

        return (
          <div key={index} className="person-card" data-type={type}>
            <img
              src={imagePath}
              alt={name}
              className="person-image"
            />
            <div className="person-name">{name}</div>
            {position && <div className="person-position">{position}</div>}
          </div>
        );
      })}
    </div>
  );
}
