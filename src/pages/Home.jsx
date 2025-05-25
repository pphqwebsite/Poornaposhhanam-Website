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
        
        <div className="cin-number">CIN Number: XXXXXXXXXXXXX</div>

        <div className="message-section">
          <h2>Founder's Message</h2>
          <div className="message-content">
            <p>
              As the Founder-CEO, I welcome you to Poornaposhhanam Foundation. Our foundation believes in "Prajñānam Brahma" - knowledge as the path to ultimate truth. In these transformative times, when Bharat is emerging as a global leader, we are dedicated to re-establishing our deep-rooted culture and ancient Vedic knowledge systems.
            </p>
            <p>
              Despite being a young organization, we have made significant impact through our scientifically-driven vision and practices. Our experienced team works with dedication and resilience, creating an environment that fosters sustainable growth and positive change. We continue our journey with a strong commitment to scientific work and the Sanatan knowledge system, driving impactful social, academic, and sustainable changes across the nation and globe.
            </p>
            <div className="message-signature">
              - Dr. Knishka Siingh<br />
              Founder & CEO, Poornaposhhanam Foundation
            </div>
          </div>
        </div>

        <div className="message-section">
          <h2>Director's Message</h2>
          <div className="message-content">
            <p>
              Welcome to Poornaposhhanam Foundation – Pragyanam Bhram, an organization dedicated to complete nourishment of body, mind, and soul. In this era of modern science and AI, we focus on blending ancient Vedic knowledge with contemporary scientific approaches to enhance biodiversity and human development.
            </p>
            <p>
              As the first not-for-profit organization connecting Aerospace Nutrition and Cosmology with food, nutrition, and spirituality, we offer various courses, trainings, and research opportunities. Our foundation works at grassroots levels, from regular Ved-Parayan to practical exposure in sports and space nutrition, promoting innovations rooted in Indian knowledge systems.
            </p>
            <div className="message-signature">
              - Acharya Shivam<br />
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
