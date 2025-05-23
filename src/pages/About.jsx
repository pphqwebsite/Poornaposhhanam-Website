import React from "react";
import PeopleDisplay from "../components/PeopleDisplay";

export default function About() {
  const collaborators = [
    ["/people/raj.jpeg", "Shri Raj Rajeshwari Ved Pathshala"],
    ["/people/arpi.jpeg", "Ms. Arpi Shah"],
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
      <PeopleDisplay people={collaborators} />

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

        <h2>Executive Advisory Board</h2>
        <table>
          <tr>
            <td>Dr. Bechan Sharma</td>
            <td>
              <em>
                Dean and Professor & Ex-Chairman, Faculty of Science and
                Department of Biochemistry, University of Allahabad, Prayagraj
                (U.P.)
              </em>
            </td>
          </tr>
          <tr>
            <td>Dr. Bhagwan Singh Chaudhary</td>
            <td>
              <em>
                Chairman & Head, Department of Geo Physics, Kurukshetra
                University, Kurukshetra (Haryana)
              </em>
            </td>
          </tr>
          <tr>
            <td>Dr. Digambar Kavitake</td>
            <td>
              <em>
                Senior Scientist - R&D Division, Arjuna Naturals Pvt. Ltd, NIN –
                ICMR, Hyderabad
              </em>
            </td>
          </tr>
          <tr>
            <td>Dr. Anand Kumar Tripathi</td>
            <td>
              <em>
                Director – National Heart Institute (International Relations),
                Principal Advisor – Swasth Bharat Abhiyan (Overseas), New Delhi
              </em>
            </td>
          </tr>
        </table>

        <h2>R&D Advisory Board</h2>
        <table>
          <tr>
            <td>Dr. Giridharan Nappanvettil</td>
            <td>
              <em>
                Ex-Senior Deputy Director, National Institute of Nutrition –
                ICMR, Palakkad (Kerala)
              </em>
            </td>
          </tr>
          <tr>
            <td>Dr. Uday Km. Sinha</td>
            <td>
              <em>
                Additional Professor and Ex-Head, Dept. of Clinical Psychology,
                Child, Adolescent & Mental Health Unit, IBHAS, New Delhi
              </em>
            </td>
          </tr>
          <tr>
            <td>Dr. Digambar Kavitake</td>
            <td>
              <em>
                Senior Scientist - R&D Division, Arjuna Naturals Pvt. Ltd,
                National Institute of Nutrition – ICMR, Hyderabad
              </em>
            </td>
          </tr>
          <tr>
            <td>Dr. Halvi Ediger RamaRaju</td>
            <td>
              <em>
                Associate Professor and Coordinator, Dept. of Obs. & Gyne. and
                Sexual Medicine Committee (FOGSI), Ballari Medical College and
                Research Center, Karnataka
              </em>
            </td>
          </tr>
          <tr>
            <td>Dr. Tanu Jain</td>
            <td>
              <em>
                Assistant Professor, Dept. of Home Science, Dr. B. R. Ambedkar
                Govt. Degree College, Audenya Padaria, Mainpuri (U.P.)
              </em>
            </td>
          </tr>
          <tr>
            <td>Shri. Syed Mumtaz Karim</td>
            <td>
              <em>
                HOD, Chief Dietician & Diabetes Expert, Dept. of Dietetics, MGM
                Mother & Child Hospital, Patna (Bihar)
              </em>
            </td>
          </tr>
        </table>

        <h2>Expert Panel</h2>
        <table>
          <tr>
            <td>Shri Gyanendra Mishra</td>
            <td>
              <em>
                Certified Sound Healing Therapist & Breath Work Expert,
                Rishikesh (Uttarakhand)
              </em>
            </td>
          </tr>
        </table>

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
