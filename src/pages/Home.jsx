import React from "react";
import ImageCarousel from "../components/ImageCarousel"; // Import the ImageCarousel component

export default function Home() {
  const images = [
    ["/home-carousel/archery.jpeg", "Archery at the Sports Science Center"],
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

  return (
    <div>
      {/* Image Carousel Outside the Section */}
      <ImageCarousel images={images} />

      <section className="section-class">
        <h1>Welcome to Poornaposhhanam Foundation</h1>
        <p>
          Driving sustainable development through knowledge, innovation, and
          community engagement.
        </p>

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
