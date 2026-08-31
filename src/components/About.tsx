import { FC } from 'react';

const About: FC<{ id: string }> = ({ id }) => {
  const skills = [
    'Analysis: Python, R, SQL',
    'Web: TypeScript, React, Node.js',
    'Data apps: Streamlit, Shiny',
    'Databases: PostgreSQL, SQLite',
    'Communication: technical writing',
    'Delivery: Git, GitHub, Vercel',
  ];

  return (
    <section id={id} className="section about">
      <div className="container">
        <h2 className="section-title">
          <span>01.</span> How I work
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I work best on problems that sit between data and product: an untidy spreadsheet that needs a reliable workflow,
              an analysis that needs a clear explanation, or an operational problem that deserves a simple web tool.
            </p>
            <p>
              My foundation is a BSc in Actuarial Science from Egerton University. Since 2018, I have delivered independent analytics,
              software, and technical-writing work, built public and private products, and supervised field-data quality for Kenya's 2019 census.
              I value careful reasoning, readable code, honest communication, and shipping something people can actually use.
            </p>
            <p>
              My core toolkit:
            </p>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
