import { FC } from 'react';

const experiences = [
  {
    id: 1,
    role: 'Data Scientist & Web Developer',
    company: 'Independent Projects',
    period: '2023 - Present',
    description: [
      'Developed 12+ data science and analytics projects focusing on Kenyan economic and demographic data',
      'Implemented machine learning algorithms including custom SVM implementations with multiple kernel support',
      'Built interactive geospatial visualizations using R Leaflet and Python for census and economic data',
      'Created timeseries forecasting models for climate data prediction using ARIMA and Prophet'
    ]
  },
  {
    id: 2,
    role: 'Statistical Analysis & Modeling',
    company: 'Research & Analysis',
    period: '2023 - Present',
    description: [
      'Performed comprehensive statistical analysis on Kenya\'s population, employment, and economic data',
      'Analyzed 2009 and 2019 census data with county-level demographic breakdowns',
      'Conducted empirical finance research and quantitative analysis using R',
      'Built interactive dashboards for economic indicators and employment trends'
    ]
  },
  {
    id: 3,
    role: 'Full-Stack Web Development',
    company: 'Learning & Development',
    period: '2023 - Present',
    description: [
      'Mastered modern web technologies: React, TypeScript, JavaScript, HTML, CSS',
      'Implemented payment integration systems (M-Pesa API with Django)',
      'Built responsive web applications with focus on data visualization and user experience',
      'Deployed applications to GitHub Pages and managed version control with Git'
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
