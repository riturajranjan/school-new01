const teachers = [
  {
    className: "teacher-science",
    name: "Dr. Arvind Menon",
    subject: "Physics & Research",
    experience: "16 years",
    quote: "Makes complex ideas visible through experiments.",
  },
  {
    className: "teacher-math",
    name: "Ms. Kavita Rao",
    subject: "Mathematics",
    experience: "14 years",
    quote: "Builds confidence through clear problem-solving habits.",
  },
  {
    className: "teacher-humanities",
    name: "Mr. Devendra Sharma",
    subject: "English & Humanities",
    experience: "18 years",
    quote: "Guides students toward thoughtful expression.",
  },
  {
    className: "teacher-early",
    name: "Ms. Naina Kapoor",
    subject: "Early Years & Arts",
    experience: "11 years",
    quote: "Creates warm classrooms for joyful discovery.",
  },
];

export default function Faculty() {
  return (
    <section className="faculty-section" id="faculty" aria-labelledby="faculty-title">
      <div className="faculty-inner">
        <div className="section-kicker">FACULTY</div>
        <h2 id="faculty-title">Teachers who bring depth, care and craft to every classroom.</h2>

        <div className="faculty-grid">
          {teachers.map((teacher) => (
            <article className={`teacher-card ${teacher.className}`} key={teacher.name}>
              <div className="teacher-portrait" aria-hidden="true"></div>
              <div className="teacher-info">
                <span>{teacher.subject}</span>
                <h3>{teacher.name}</h3>
                <p>{teacher.experience} experience</p>
                <blockquote>{teacher.quote}</blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
