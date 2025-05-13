import React from 'react';
import ImageCarousel from '../components/ImageCarousel'; // Import the ImageCarousel component

export default function Home() {
  const images = [
    '/home-carousel/1.jpg', 
    '/home-carousel/2.jpeg', 
    '/home-carousel/3.jpg', 
    '/home-carousel/4.jpg', 
    '/home-carousel/5.jpeg'
  ];

  return (
    <div>
      {/* Image Carousel Outside the Section */}
      <ImageCarousel images={images} />

      <section className="section-class">
        <h1>Welcome to Poornaposhhanam Foundation</h1>
        <p>Empowering change through education, research, and collaboration.</p>

        <h3>Become a Member</h3>
        <p>Join our network and be a part of impactful global and local initiatives.</p>
        <a href="https://forms.gle/membership-form" target="_blank" rel="noopener noreferrer">Membership Form</a>

        <h3>Volunteer With Us</h3>
        <p>Get involved in our projects and initiatives by volunteering your time and skills.</p>
        <a href="https://forms.gle/volunteer-form" target="_blank" rel="noopener noreferrer">Volunteer Form</a>

        <h3>News & Events</h3>
        <ul>
          <li>Workshop on Sustainable Agriculture - July 2025</li>
          <li>Webinar: AI for Social Good - August 2025</li>
        </ul>

        <h3>Social and Global Impact</h3>
        <p>Our programs have reached over 20,000 beneficiaries across 12 countries.</p>
      </section>
    </div>
  );
}
