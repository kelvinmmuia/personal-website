import { FC } from 'react';

const experiences = [
  {
    id: 1,
    role: 'Independent Data & Software Consultant',
    company: 'Remote client work',
    period: 'Aug 2018 - Present',
    description: [
      'Turn loosely defined requirements into scoped analytics, automation, database, and web-app deliverables',
      'Work across Python, R, SQL, Excel, React, TypeScript, PostgreSQL, and SQLite, selecting the smallest practical stack for each problem',
      'Deliver reproducible analysis, readable documentation, and maintainable handover materials for remote clients',
    ],
  },
  {
    id: 2,
    role: 'Independent Product Builder',
    company: 'ShiftSnap, Kamwifi & focused web tools',
    period: '2023 - Present',
    description: [
      'Design and ship small products around real workflows, including schedule-to-calendar conversion and hotspot operations',
      'Own product framing, interface design, implementation, deployment, and iteration',
      'Balance useful automation with review steps where source data or machine extraction can be imperfect',
    ],
  },
  {
    id: 3,
    role: 'Content Supervisor',
    company: 'Kenya National Bureau of Statistics',
    period: 'Jun 2019 - Aug 2019',
    description: [
      'Trained and oversaw six enumerators during the Kenya Population and Housing Census 2019',
      'Verified sampled field data for consistency and accuracy',
      'Managed field operations in Kilungu Ward, Makueni County',
    ],
  },
];

const Experience: FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="section experience">
      <div className="container">
        <h2 className="section-title">
          <span>02.</span> Experience
        </h2>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <h3 className="role">{exp.role}</h3>
                <span className="company">@ {exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
              <ul className="experience-description">
                {exp.description.map((item) => (
                  <li key={item}>
                    <span className="bullet">&gt;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
