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
    title: 'ShiftSnap',
    summary: 'A privacy-friendly schedule parser that turns screenshots or pasted shift text into editable events, a weekly summary, and an import-ready calendar file.',
    technologies: ['TypeScript', 'React', 'OCR workflow', 'Calendar export', 'Vercel'],
    demo: 'https://shiftsnap-phi.vercel.app/',
    image: '/shiftsnap-landing.png',
    proof: 'Live app · private source',
  },
  {
    id: 2,
    title: 'Kamwifi',
    summary: 'A commercial hotspot platform connecting customer access, payments, network operations, and admin visibility for WiFi operators.',
    technologies: ['Product', 'MikroTik', 'Payments', 'Dashboards', 'Operations'],
    demo: 'https://kamwifi.co.ke/',
    image: '/kamwifi-landing.png',
    proof: 'Private product',
  },
  {
    id: 3,
    title: 'KAMWI Horizon',
    summary: 'Invite-native lending infrastructure for small communities, with identity-gated onboarding, trust-aware credit workflows, wallet movement, and verifiable ledger evidence.',
    technologies: ['Product', 'Lending workflows', 'Trust scoring', 'Audit ledger', 'Identity controls'],
    demo: 'https://www.kamwi.co.ke/',
    image: '/kamwi-landing.png',
    proof: 'Private product',
  },
  {
    id: 4,
    title: 'CLOApp - Course Learning Outcomes',
    summary: 'A focused curriculum-mapping workspace for aligning learning outcomes, weekly topics, assessments, and coverage, with no account required.',
    technologies: ['React', 'TypeScript', 'Curriculum mapping', 'Exports', 'Vercel'],
    demo: 'https://cloapp-gamma.vercel.app/',
    image: '/cloapp-landing.png',
    proof: 'Live app · private source',
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
    title: 'KPHC & Kenyan Counties Data',
    summary: 'Interactive county-level visualization of Kenyan demographic and economic indicators.',
    technologies: ['R', 'Leaflet', 'Geospatial', 'Public data', 'Dashboards'],
    github: 'https://github.com/kelvinmmuia/KPHC2019andKenyanCountiesData',
    demo: 'https://kelvinmwakamuia.shinyapps.io/KPHC2019andKenyanCountiesData/',
    image: '/Kenya_Population_Housing_Census.png',
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
          Seven projects that show how I move from a real problem to a usable product, analysis, or deployed data application.
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
