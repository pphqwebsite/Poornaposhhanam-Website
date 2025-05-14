// src/components/Footer.jsx
import React from "react";
import "../styles/style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Poornaposhhanam Foundation. All rights
        reserved.
      </p>
    </footer>
  );
}
