import React from "react";
import ImageCarousel from "../components/ImageCarousel"; // Import the ImageCarousel component
import ImageDisplay from "../components/ImageDisplay";

export default function Home() {
  const images = [
    [
      "/home-carousel/archery.jpeg",
      "PPF team visit at India's 2nd largest sports training campus - Sports Authority of India",
    ],
    [
      "/home-carousel/exercise.jpeg",
      "Sports Authority of India (Chh. Sambhajinagar, Maharashtra) Visit and Practical Training on Sports specific exercises for Nutrition Students",
    ],
    [
      "/home-carousel/gurukul.jpeg",
      "Distribution of educational study material to promote & support gurukul education",
    ],
    [
      "/home-carousel/promote-2.jpeg",
      "Mountain Hiking Initiative To Promote Sports specific health with fun among youth",
    ],
    ["/home-carousel/sports.jpeg", "Activity at the Sports Science Center"],
    [
      "/home-carousel/workshop.jpeg",
      "Bagwani with Gurukul - Hands-on-Workshop on Ayurvedic Nutrition for students",
    ],
    [
      "/home-carousel/promote.jpeg",
      "Mountain Hiking Initiative To Promote Sports specific health with fun among youth",
    ],
    [
      "/home-carousel/anemia.jpeg",
      "Hands-on-training cum Awareness Program conducted in School on 'Prevention & Management of Malnutrition & Anemia in young children'",
    ],
    // [
    //   "/home-carousel/ved.jpeg",
    //   "Ved Parayan by Rig Veda, Shukla Yajurveda, Sam veda and Atharva Veda Expert - 2024",
    // ],
    // [
    //   "/home-carousel/deep.jpeg",
    //   "Deep Prajwalan on Dev Deepavali at Varanasi Ghat (2024)",
    // ],
    // [
    //   "/home-carousel/durga.jpeg",
    //   "Maa Lalita Shahatrarchan, Lolark Kund, Mahishasur Mardni Temple, Varanasi (2024)",
    // ],
  ];

  const logos = [
    "/logos/sdg.jpeg",
    "/logos/pa.jpeg",
    "/logos/mca.jpeg"
  ];

  return (
    <div>
      {/* Image Carousel Outside the Section */}
      <ImageCarousel images={images} />

      <section className="section-class">
        <h1 className="welcome-heading">Welcome to Poornaposhhanam Foundation</h1>
        <p>
          Driving sustainable development through knowledge, innovation, and
          community engagement.
        </p>

        <ImageDisplay people={logos} simpleDisplay={true} />

        <div className="message-section">
          <h2>Founder's Message</h2>
          <div className="message-content">
            <p>
              At Poornaposhhanam Foundation, we believe in the power of holistic development that combines ancient wisdom with modern scientific approaches. Our journey began with a vision to create sustainable change through education, research, and community engagement.
            </p>
            <p>
              We are committed to empowering individuals and communities by promoting health, nutrition, and spiritual well-being. Through our various initiatives, we aim to bridge the gap between traditional knowledge and contemporary practices, creating a harmonious balance for sustainable growth.
            </p>
            <div className="message-signature">
              - Dr. Bechan Sharma<br />
              Founder, Poornaposhhanam Foundation
            </div>
          </div>
        </div>

        <div className="message-section">
          <h2>Director's Message</h2>
          <div className="message-content">
            <p>
              As we move forward in our mission, we remain focused on creating meaningful impact through research-driven initiatives and community-based programs. Our commitment to excellence and innovation drives us to continuously explore new avenues for sustainable development.
            </p>
            <p>
              We invite you to join us in this journey of transformation, where together we can create a healthier, more sustainable future for generations to come. Your support and participation are invaluable in helping us achieve our vision of holistic well-being for all.
            </p>
            <div className="message-signature">
              - Dr. Anand Kumar Tripathi<br />
              Director, Poornaposhhanam Foundation
            </div>
          </div>
        </div>

        <h3>News & Events</h3>
        <div className="news-marquee">
          <div className="marquee-content">
            <span className="news-item">
              • Research partnership signed with IIT-BHU to study rural
              nutrition trends.
            </span>
            <span className="news-item">
              • Poornaposhhanam hosts seminar on Climate-Resilient Farming in
              Varanasi.
            </span>
            <span className="news-item">
              • Annual Community Health Survey begins across 3 districts this
              July.
            </span>
            <span className="news-item">
              • Educational outreach program launched for underprivileged school
              children.
            </span>
            <span className="news-item">
              • Foundation Day Celebration planned for August 2025 with guest
              lectures.
            </span>
            <span className="news-item">
              • Publication of white paper on Holistic Rural Development now
              available.
            </span>
          </div>
        </div>

        <h3>Become a Member</h3>
        <p>
          Join our network to support sustainable change through education,
          health, and research.
        </p>
        <a
          href="https://surveyheart.com/form/68261408543db626e9311825"
          target="_blank"
          rel="noopener noreferrer"
        >
          Membership Form
        </a>

        <h3>Volunteer With Us</h3>
        <p>
          Contribute your time and skills to grassroots initiatives making
          real-world impact.
        </p>
        <a
          href="https://surveyheart.com/form/682618c7f2248a26abd073d7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Volunteer Form
        </a>

        <h3>Donate for the Cause</h3>
        <p>
          Support our mission to uplift communities through targeted,
          high-impact interventions.
        </p>
        <a
          href="https://surveyheart.com/form/68261ab5f061e226ef54ef0f"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donation Form
        </a>
      </section>
    </div>
  );
}
