import { FC } from 'react';

const About: FC<{ id: string }> = ({ id }) => {
  const skills = [
    'Python',
    'R',
    'SQL',
    'JavaScript',
    'TypeScript',
    'React',
    'Streamlit',
    'Shiny',
    'Data Analytics',
    'Data Visualization',
    'Technical Writing',
    'Jupyter Notebook',
    'Quarto',
    'Git & GitHub',
  ];

  return (
    <section id={id} className="section about">
      <div className="container">
        <h2 className="section-title">
          <span>01.</span> About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Nairobi-based data analyst and full-stack data developer with a Bachelor of Science in Actuarial Science
              from Egerton University. I work at the point where analysis, writing, and implementation meet: cleaning data,
              explaining what it means, and building the tool or dashboard that makes it usable.
            </p>
            <p>
              My experience spans freelance analytics, UvoCorp technical writing/data analysis, KNBS census field supervision,
              public-data visualization, and private commercial products such as Kamwifi. I am most useful to teams that need someone
              who can move from an unclear request to a reproducible analysis, a stakeholder-ready explanation, or a working data-backed app.
            </p>
            <p>
              Here are the technologies and tools I work with:
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
