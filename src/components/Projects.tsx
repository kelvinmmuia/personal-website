import { FC } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

type Project = {
  id: number;
  title: string;
  summary: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  proof: 'Public repo' | 'Live app · private source' | 'Private product';
};

const projects: Project[] = [
  {
    id: 1,
    title: 'KPHC & Kenyan Counties Data',
    summary: 'Interactive county-level comparison of Kenyan demographic and economic indicators built from public data.',
    technologies: ['R', 'Leaflet', 'Geospatial', 'Public data', 'Dashboards'],
    github: 'https://github.com/kelvinmmuia/KPHC2019andKenyanCountiesData',
    demo: 'https://kelvinmwakamuia.shinyapps.io/KPHC2019andKenyanCountiesData/',
    image: '/Kenya_Population_Housing_Census.png',
    proof: 'Public repo',
  },
  {
    id: 2,
    title: 'Kenyan Employment Analysis',
    summary: 'Public employment data prepared for year-by-year comparison and communication of labour-market trends.',
    technologies: ['R', 'Time series', 'Public data', 'Data visualisation'],
    github: 'https://github.com/kelvinmmuia/Total_estimated_employment_in_kenya_2010_2019',
    image: '/Kenya_Employment_Analysis.png',
    proof: 'Public repo',
  },
  {
    id: 3,
    title: 'Kenyan Climate Time Series',
    summary: 'Rainfall and temperature data explored and presented through charts and forecasting work.',
    technologies: ['R', 'Forecasting', 'Public data', 'Time series'],
    github: 'https://github.com/kelvinmmuia/Kenyan_Climate_Data_Timeseries',
    image: '/Kenyan_Climate_Data_Timeseries.png',
    proof: 'Public repo',
  },
  {
    id: 4,
    title: 'Kamwifi',
    summary: 'A commercial hotspot platform connecting customer access, payments, network operations, and admin reporting for WiFi operators.',
    technologies: ['Product', 'MikroTik', 'Payments', 'Dashboards', 'Operations'],
    demo: 'https://kamwifi.co.ke/',
    image: '/kamwifi-landing.png',
    proof: 'Private product',
  },
  {
    id: 5,
    title: 'Movie Database Management System',
    summary: 'A deployed Streamlit and SQLite application for managing a relational movie catalogue and searching across connected records.',
    technologies: ['Python', 'Streamlit', 'SQLite', 'Data app', 'Search'],
    github: 'https://github.com/kelvinmmuia/MoviesDBapp',
    demo: 'https://moviesdbapp.streamlit.app/',
    proof: 'Public repo',
  },
  {
    id: 6,
    title: 'SVM Custom Implementation',
    summary: 'Support Vector Machine workflows for regression and classification with Linear, RBF, Polynomial, and Sigmoid kernels.',
    technologies: ['Python', 'Machine Learning', 'NumPy', 'Pandas', 'Model evaluation'],
    github: 'https://github.com/kelvinmmuia/SVM-python-custom',
    demo: 'https://github.com/kelvinmmuia/SVM-python-custom',
    image: '/SVM_Custom_Implementation.png',
    proof: 'Public repo',
  },
  {
    id: 7,
    title: 'ShiftSnap',
    summary: 'A privacy-friendly schedule parser that turns screenshots or pasted shift text into editable events, a weekly summary, and an import-ready calendar file.',
    technologies: ['TypeScript', 'React', 'OCR workflow', 'Calendar export', 'Vercel'],
    demo: 'https://shiftsnap-phi.vercel.app/',
    image: '/shiftsnap-landing.png',
    proof: 'Live app · private source',
  },
  {
    id: 8,
    title: 'KAMWI Horizon',
    summary: 'Invite-native lending infrastructure for small communities, with identity-gated onboarding, trust-aware credit workflows, wallet movement, and verifiable ledger evidence.',
    technologies: ['Product', 'Lending workflows', 'Trust scoring', 'Audit ledger', 'Identity controls'],
    demo: 'https://www.kamwi.co.ke/',
    image: '/kamwi-landing.png',
    proof: 'Private product',
  },
  {
    id: 9,
    title: 'CLOApp - Course Learning Outcomes',
    summary: 'A focused curriculum-mapping workspace for aligning learning outcomes, weekly topics, assessments, and coverage, with no account required.',
    technologies: ['React', 'TypeScript', 'Curriculum mapping', 'Exports', 'Vercel'],
    demo: 'https://cloapp-gamma.vercel.app/',
    image: '/cloapp-landing.png',
    proof: 'Live app · private source',
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
          Public data analysis, deployed data applications, and products built around real operational workflows.
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
                    <span className="project-monogram" aria-hidden="true">{project.title.slice(0, 2).toUpperCase()}</span>
                    <strong>{project.title}</strong>
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
