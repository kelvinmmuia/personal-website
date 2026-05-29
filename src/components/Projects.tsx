import { FC } from 'react';
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi';

type Project = {
  id: number;
  title: string;
  summary: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  proof: 'Public repo' | 'Live app' | 'Private product';
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Kamwifi',
    summary: 'Commercial WiFi monetization and operations product for hotspot access, customer workflows, and network-admin visibility.',
    technologies: ['Product', 'MikroTik', 'Payments', 'Dashboards', 'Operations'],
    demo: 'https://kamwifi.co.ke/',
    proof: 'Private product',
  },
  {
    id: 2,
    title: 'CLOApp - Course Learning Outcomes',
    summary: 'No signup. No login. Start mapping. Build course learning outcomes, weekly topics, assessments, and coverage matrices in a focused workspace with exportable outputs.',
    technologies: ['React', 'TypeScript', 'Curriculum mapping', 'Exports', 'Vercel'],
    demo: 'https://cloapp-gamma.vercel.app/',
    proof: 'Live app',
  },
  {
    id: 3,
    title: 'Movie Database Management System',
    summary: 'Streamlit and SQLite database application for movie catalog management, relationships, and search workflows.',
    technologies: ['Python', 'Streamlit', 'SQLite', 'Data app', 'Search'],
    github: 'https://github.com/kelvinmmuia/MoviesDBapp',
    demo: 'https://moviesdbapp.streamlit.app/',
    proof: 'Live app',
  },
  {
    id: 4,
    title: 'SVM Custom Implementation',
    summary: 'Support Vector Machine workflows for regression and classification with Linear, RBF, Polynomial, and Sigmoid kernels.',
    technologies: ['Python', 'Machine Learning', 'NumPy', 'Pandas', 'Model evaluation'],
    github: 'https://github.com/kelvinmmuia/SVM-python-custom',
    demo: 'https://github.com/kelvinmmuia/SVM-python-custom',
    image: '/SVM_Custom_Implementation.png',
    proof: 'Public repo',
  },
  {
    id: 5,
    title: 'Kenyan Climate Data Timeseries',
    summary: 'Forecasting and visualization workflows for Kenyan rainfall and temperature data.',
    technologies: ['Python', 'R', 'Forecasting', 'Visualization', 'Data cleaning'],
    github: 'https://github.com/kelvinmmuia/Kenyan_Climate_Data_Timeseries',
    demo: 'https://github.com/kelvinmmuia/Kenyan_Climate_Data_Timeseries/blob/main/annfittedvsactualvalues.png',
    image: '/Kenyan_Climate_Data_Timeseries.png',
    proof: 'Public repo',
  },
  {
    id: 6,
    title: 'KPHC & Kenyan Counties Data',
    summary: 'Interactive county-level visualization of Kenyan demographic and economic indicators.',
    technologies: ['R', 'Leaflet', 'Geospatial', 'Public data', 'Dashboards'],
    github: 'https://github.com/kelvinmmuia/KPHC2019andKenyanCountiesData',
    demo: 'https://kelvinmwakamuia.shinyapps.io/KPHC2019andKenyanCountiesData/',
    image: '/Kenya_Population_Housing_Census.png',
    proof: 'Live app',
  },
  {
    id: 7,
    title: 'Kenya Employment Analysis',
    summary: 'Analysis of employment trends in Kenya from 2010 to 2019 across sectors and reporting outputs.',
    technologies: ['R', 'Python', 'Statistics', 'Visualization', 'Reporting'],
    github: 'https://github.com/kelvinmmuia/Total_estimated_employment_in_kenya_2010_2019',
    demo: 'https://github.com/kelvinmmuia/Total_estimated_employment_in_kenya_2010_2019/blob/main/total_estimated_employment.pdf',
    image: '/Kenya_Employment_Analysis.png',
    proof: 'Public repo',
  },
  {
    id: 8,
    title: 'Optimal Stopping Problem',
    summary: 'Decision-theory explanation and implementation of the Secretary Problem and house-hunting scenario.',
    technologies: ['Statistics', 'Algorithms', 'Explanation', 'HTML', 'Python'],
    github: 'https://github.com/kelvinmmuia/TheOptimalStoppingProblem',
    demo: 'https://github.com/kelvinmmuia/TheOptimalStoppingProblem',
    image: '/Optimal_Stopping_Problem.png',
    proof: 'Public repo',
  },
];

const Projects: FC<{ id: string }> = ({ id }) => {
  const getImageSrc = (image: string) => {
    if (image.startsWith('http')) {
      return image;
    }

    return `${import.meta.env.BASE_URL}${image.replace(/^\//, '')}`;
  };

  return (
    <section id={id} className="section projects">
      <div className="container">
        <h2 className="section-title">
          <span>03.</span> Selected Work
        </h2>
        <p className="section-intro">
          A few public projects, live tools, and private products I can discuss without exposing client code.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image-wrapper">
                {project.image ? (
                  <img
                    src={getImageSrc(project.image)}
                    alt={`${project.title} screenshot`}
                    className="project-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-proof-panel">
                    <FiFileText size={34} />
                    <span>{project.proof}</span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <div className="project-heading">
                  <span className="proof-badge">{project.proof}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-description">{project.summary}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="project-link"
                      title="View public repository"
                    >
                      <FiGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo or proof link`}
                      className="project-link"
                      title="View proof link"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
