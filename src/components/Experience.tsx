import { FC } from 'react';

const experiences = [
  {
    id: 1,
    role: 'Technical Writer - Data Analyst',
    company: 'UvoCorp.com',
    period: 'Nov 2022 - Present',
    description: [
      'Perform end-to-end data analysis on projects using R, SQL, and Python',
      'Extract insights and provide data-driven solutions for clients',
      'Create technical documentation and reports for data analysis projects',
      'Collaborate with cross-functional teams on data-driven initiatives'
    ]
  },
  {
    id: 2,
    role: 'Freelancer Data Analyst & Web Developer',
    company: 'Fiverr.com',
    period: 'Aug 2018 - Present',
    description: [
      'Perform end-to-end data analysis on diverse client projects using R, SQL, and Python',
      'Develop web applications and private projects for clients using React, JavaScript, and TypeScript',
      'Extract actionable insights and provide solutions for business problems',
      'Build interactive dashboards, data visualizations, and responsive web applications',
      'Maintain high ratings through quality work and timely delivery'
    ]
  },
  {
    id: 3,
    role: 'Content Supervisor',
    company: 'Kenya National Bureau of Statistics',
    period: 'June 2019 - Aug 2019',
    description: [
      'Trained and oversaw the work of six Enumerators in the Kenya Population and Housing Census 2019',
      'Ensured data quality and accuracy in census data collection',
      'Managed field operations in Kilungu Ward, Makueni County',
      'Contributed to Kenya\'s official demographic data collection'
    ]
  }
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
                {exp.description.map((item, index) => (
                  <li key={index}>
                    <span className="bullet">▹</span> {item}
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
