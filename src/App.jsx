import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/style.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Publications from "./pages/Publications";
import RnD from "./pages/RnD";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Training from "./pages/Training";

function App() {
  return (
    <Router>
      <div className="site-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/training" element={<Training />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/rnd" element={<RnD />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
