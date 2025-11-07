import { FC } from 'react';

const About: FC<{ id: string }> = ({ id }) => {
  const skills = [
    'Python',
    'R',
    'SQL',
    'NoSQL',
    'JavaScript',
    'TypeScript',
    'React',
    'HTML & CSS',
    'Machine Learning',
    'Data Analytics',
    'Data Visualization',
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
              Hello! I'm Kelvin, a data scientist and self-taught web developer with a strong focus on 
              extracting actionable insights from complex datasets. My journey in tech started with a curiosity 
              about data analysis and statistical modeling, which evolved into a passion for building 
              data-driven applications and interactive visualizations.
            </p>
            <p>
              I specialize in combining rigorous data analysis with modern web technologies to create 
              intelligent applications that solve real-world problems. My expertise spans statistical modeling, 
              machine learning, geospatial analysis, and full-stack web development. I'm particularly passionate 
              about Kenyan economic and demographic data, having built several projects analyzing census data, 
              employment trends, and economic indicators.
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
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src="https://avatars.githubusercontent.com/u/226503422?v=4" 
                alt="Kelvin Mwaka Muia" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
