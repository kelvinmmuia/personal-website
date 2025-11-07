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
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src="/personal-website/CLS_9492_copy.jpg"
                alt="Kelvin Mwaka Muia" 
                className="profile-image"
              />
            </div>
          </div>
          <div className="about-text">
            <p>
              Hello! I'm Kelvin, a Data Scientist and Data Analyst with a Bachelor of Science in Actuarial Science 
              from Egerton University. My journey in tech started with a curiosity about extracting insights from data, 
              which evolved into a passion for building data-driven applications and interactive visualizations.
            </p>
            <p>
              I specialize in end-to-end data analysis, combining rigorous statistical modeling with modern web technologies 
              to create intelligent applications that solve real-world problems. With 6+ years of freelance experience on Fiverr 
              and current work at UvoCorp, I've developed expertise in data wrangling, visualization, machine learning, and 
              geospatial analysis. I'm particularly passionate about Kenyan economic and demographic data, having contributed 
              to the Kenya Population and Housing Census 2019 and built several projects analyzing census data and economic indicators.
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
