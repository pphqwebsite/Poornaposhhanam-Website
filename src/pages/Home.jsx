import React from "react";
import ImageCarousel from "../components/ImageCarousel"; // Import the ImageCarousel component
import ImageDisplay from "../components/ImageDisplay";
import NewsDisplay from "../components/NewsDisplay";

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
    ["/home-carousel/sports.jpeg", "PPF team visit at India's 2nd largest sports training campus - Sports Authority of India"],
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

  const newsItems = [
    ["/events/adapt.jpeg"],
    ["/events/admon.jpeg"]
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

        <div className="cin-number">CIN Number: U88900UP2024NPL210722</div>
        <div className="cin-number">NITI Ayog Reg: UP/2025/0587979</div>

        <div className="message-section">
          <h2>Founder's Message</h2>
          <div className="message-content">
            <img src="/msg/founder.jpeg" alt="Founder's Message" className="message-image" />
            <div className="profile-image-container">
              <img src="/people/dks.jpeg" alt="Dr. Knishka Siingh" className="profile-image" />
              <div className="profile-signature">
                - Dr. Knishka Siingh<br />
                Founder & CEO, Poornaposhhanam Foundation
              </div>
            </div>
          </div>
        </div>

        <div className="message-section">
          <h2>Director's Message</h2>
          <div className="message-content">
            <img src="/msg/director.jpeg" alt="Director's Message" className="message-image" />
            <div className="profile-image-container">
              <img src="/people/shiv.jpeg" alt="Acharya Shivam" className="profile-image" />
              <div className="profile-signature">
                - Acharya Shivam<br />
                Director, Poornaposhhanam Foundation
              </div>
            </div>
          </div>
        </div>

        {newsItems.length > 0 && (
          <>
            <h3>News & Events</h3>
            <NewsDisplay items={newsItems} />
          </>
        )}

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
