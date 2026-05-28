import { FC } from 'react';

const experiences = [
  {
    id: 1,
    role: 'Technical Writer - Data Analyst',
    company: 'UvoCorp.com',
    period: 'Nov 2022 - Present',
    description: [
      'Produce technical data-analysis solutions, code explanations, reports, and documentation across R, Python, SQL, Excel, and notebook workflows',
      'Review requirements, verify calculations and code logic, clean/query data, build visualizations, and explain methods clearly',
      'Translate ambiguous prompts into reproducible reasoning and stakeholder-ready written outputs',
    ],
  },
  {
    id: 2,
    role: 'Freelance Data Analyst & Web Developer',
    company: 'Fiverr.com / Independent Client Work',
    period: 'Aug 2018 - Present',
    description: [
      'Deliver analytics and development projects using R, Python, SQL, Excel, PostgreSQL, MySQL, SQLite, React, TypeScript, PHP, and GitHub',
      'Build data apps, dashboards, database-backed tools, and private commercial products from ambiguous client briefs',
      'Publish public projects in machine learning, forecasting, decision theory, geospatial analysis, Kenyan public data, and database applications',
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
