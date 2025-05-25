import React from "react";
import ImageDisplay from "../components/ImageDisplay";

export default function About() {
  const collaborators = [
    ["/people/raj.jpeg", "Shri Raj Rajeshwari Ved Pathshala"],
    ["/people/arpi.jpeg", "Ms. Arpi Shah"],
  ];

  const ppfExecutiveCommittee = [
    ["/people/dummy.jpeg", "Dummy Name 1", "Dummy Position 1"],
    ["/people/dummy.jpeg", "Dummy Name 2", "Dummy Position 2"],
    ["/people/dummy.jpeg", "Dummy Name 3", "Dummy Position 3"],
  ];

  const executiveBoard = [
    ["/people/bs.jpeg", "Dr. Bechan Sharma", "Dean and Professor & Ex-Chairman, Faculty of Science and Department of Biochemistry, University of Allahabad, Prayagraj (U.P.)"],
    ["/people/bsc.jpeg", "Dr. Bhagwan Singh Chaudhary", "Chairman & Head, Department of Geo Physics, Kurukshetra University, Kurukshetra (Haryana)"],
    ["/people/dk.jpeg", "Dr. Digambar Kavitake", "Senior Scientist - R&D Division, Arjuna Naturals Pvt. Ltd, NIN – ICMR, Hyderabad"],
    ["/people/akm.jpeg", "Dr. Anand Kumar Tripathi", "Director – National Heart Institute (International Relations), Principal Advisor – Swasth Bharat Abhiyan (Overseas), New Delhi"],
  ];

  const rndBoard = [
    ["/people/dgrd.jpeg", "Dr. Giridharan Nappanvettil", "Ex-Senior Deputy Director, National Institute of Nutrition – ICMR, Palakkad (Kerala)"],
    ["/people/uks.jpeg", "Dr. Uday Km. Sinha", "Additional Professor and Ex-Head, Dept. of Clinical Psychology, Child, Adolescent & Mental Health Unit, IBHAS, New Delhi"],
    ["/people/dk.jpeg", "Dr. Digambar Kavitake", "Senior Scientist - R&D Division, Arjuna Naturals Pvt. Ltd, National Institute of Nutrition – ICMR, Hyderabad"],
    ["/people/dummy.jpeg", "Dr. Halvi Ediger RamaRaju", "Associate Professor and Coordinator, Dept. of Obs. & Gyne. and Sexual Medicine Committee (FOGSI), Ballari Medical College and Research Center, Karnataka"],
    ["/people/tj.jpeg", "Dr. Tanu Jain", "Assistant Professor, Dept. of Home Science, Dr. B. R. Ambedkar Govt. Degree College, Audenya Padaria, Mainpuri (U.P.)"],
    ["/people/smk.jpeg", "Shri. Syed Mumtaz Karim", "HOD, Chief Dietician & Diabetes Expert, Dept. of Dietetics, MGM Mother & Child Hospital, Patna (Bihar)"],
  ];

  const expertPanel = [
    ["/people/sgm.jpeg", "Shri Gyanendra Mishra", "Certified Sound Healing Therapist & Breath Work Expert, Rishikesh (Uttarakhand)"],
  ];

  return (
    <section className="section-class">
      <h1>About Us</h1>
      <p>
        Poornaposhhanam Foundation is a non-profit, research-driven organization
        dedicated to the holistic well-being of individuals and communities. We
        integrate nutrition, spirituality, and ancient Vedic sciences to promote
        sustainable and healthy lifestyles. Through various courses, trainings,
        and research initiatives, we strive to empower people globally to
        achieve balanced health of body, mind, and soul.
      </p>

      {/* Download Button */}
      <div className="download-section">
        <a href="/profile/profile.pdf" download className="download-button">
          Download our Brochure
        </a>
      </div>

      <h2>Collaborators</h2>
      <ImageDisplay people={collaborators} />

      <h2>Vision & Mission</h2>
      <p>
        <b>Vision: </b>To promote a harmonious existence through the integration
        of right knowledge, nutrition, and spiritual practices, leading to
        healthier and more productive lives.
      </p>
      <p>
        <b>Mission: </b>To empower individuals and communities by promoting
        holistic health, nutrition, and well-being, while blending ancient
        wisdom with modern scientific practices for sustainable growth.
      </p>

      <h2>Organisational Structure</h2>
      <div>
        <img src="/structure.jpg" alt="Organisational Structure" />
        <p className="image-description">
          Poornaposhhanam Foundation – Organisational Structure
        </p>

        <h2>Objective</h2>
        <ul>
          <li>To promote health, nutrition, and Vedic education.</li>
          <li>
            To conduct research on alternative medicine and promote food
            security.
          </li>
          <li>
            To provide training and internships for skill development and
            empowerment.
          </li>
          <li>To support clean energy and environmental sustainability.</li>
        </ul>

        <h2>Philosophy</h2>
        <p>
          Poornaposhhanam Foundation operates under the belief that true
          nourishment transcends the physical body, encompassing mind and soul.
          Drawing from ancient Vedic knowledge, we integrate this with
          scientific advancements to foster holistic well-being and a
          sustainable lifestyle. Our philosophy embodies the idea of Poorna
          Poshanam — complete nourishment.
        </p>

        <h2>History & Background</h2>
        <p>
          Founded in 2024 in Uttar Pradesh, India, Poornaposhhanam Foundation
          evolved from a vision established in 2019. It was inspired by the
          desire to bridge the gap between ancient Vedic wisdom and modern
          science, with a focus on improving nutritional practices and spiritual
          growth. The foundation is dedicated to bringing about lasting positive
          changes through research, education, and community outreach.
        </p>

        <h2>PPF Executive Committee</h2>
        <ImageDisplay people={ppfExecutiveCommittee} />

        <h2>Executive Advisory Board</h2>
        <ImageDisplay people={executiveBoard} />

        <h2>R&D Advisory Board</h2>
        <ImageDisplay people={rndBoard} />

        <h2>Expert Panel</h2>
        <ImageDisplay people={expertPanel} />

        <h2>Departments</h2>
        <ul>
          <li>Department of Aerospace & Defence Studies</li>
          <li>Department of Ancient & Vedic Sciences</li>
          <li>Department of Clinical & Therapeutic Sciences</li>
          <li>Department of Educational Outreach & Cultural Studies</li>
          <li>
            Department of Food, Nutrition, Environment & Agricultural Sciences
          </li>
          <li>Department of Research & Development</li>
          <li>Department of Sexual & Mental Health Studies</li>
          <li>Department of Skill Development, Training & Empowerment</li>
        </ul>
      </div>
    </section>
  );
}
