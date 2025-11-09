import { FC } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'SVM Custom Implementation',
    description: 'A custom implementation of the Support Vector Machine (SVM) algorithm for regression and classification tasks. Supports Linear, RBF, Polynomial, and Sigmoid kernels with comprehensive documentation and examples.',
    technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'NumPy', 'Pandas'],
    github: 'https://github.com/kelvinmmuia/SVM-python-custom',
    demo: 'https://github.com/kelvinmmuia/SVM-python-custom',
    image: '/SVM_Custom_Implementation.png'
  },
  {
    id: 2,
    title: 'Kenyan Climate Data Timeseries',
    description: 'Predictive analysis of Kenyan temperature and rainfall data using timeseries forecasting techniques. Includes data preprocessing, exploratory analysis, and ARIMA/Prophet models for climate prediction.',
    technologies: ['Python', 'R', 'Data Analysis', 'Timeseries', 'Visualization'],
    github: 'https://github.com/kelvinmmuia/Kenyan_Climate_Data_Timeseries',
    demo: 'https://github.com/kelvinmmuia/Kenyan_Climate_Data_Timeseries/blob/main/annfittedvsactualvalues.png',
    image: '/Kenyan_Climate_Data_Timeseries.png'
  },
  {
    id: 3,
    title: 'Gapminder Data Visualization',
    description: 'Global demographic and economic data visualization project. Interactive visualizations of world development indicators including GDP, life expectancy, and population trends. Explore global development patterns through dynamic, interactive dashboards.',
    technologies: ['R', 'Shiny', 'Data Visualization', 'Plotly', 'Interactive'],
    github: 'https://github.com/kelvinmmuia/GapminderDataVisualization',
    demo: 'https://kelvinmwakamuia.shinyapps.io/GapminderDataVisualization/',
    image: 'https://kelvinmwakamuia.shinyapps.io/GapminderDataVisualization/'
  },
  {
    id: 4,
    title: 'Optimal Stopping Problem',
    description: 'Mathematical analysis and implementation of the optimal stopping problem (Secretary Problem). Includes house hunting scenarios and decision theory applications with interactive demonstrations.',
    technologies: ['HTML', 'Python', 'Mathematics', 'Statistics', 'Algorithms'],
    github: 'https://github.com/kelvinmmuia/TheOptimalStoppingProblem',
    demo: 'https://github.com/kelvinmmuia/TheOptimalStoppingProblem/blob/main/Optimal-stopping-problem_gem_files/figure-html/r-visualization-1.png',
    image: '/Optimal_Stopping_Problem.png'
  },
  {
    id: 5,
    title: 'Kenya Employment Analysis',
    description: 'Comprehensive analysis of employment trends in Kenya from 2010-2019. Statistical analysis and visualizations of employment data across sectors and regions.',
    technologies: ['R', 'Python', 'Data Analysis', 'Statistics', 'Visualization'],
    github: 'https://github.com/kelvinmmuia/Total_estimated_employment_in_kenya_2010_2019',
    demo: 'https://github.com/kelvinmmuia/Total_estimated_employment_in_kenya_2010_2019/blob/main/total_estimated_employment.pdf',
    image: '/Kenya_Employment_Analysis.png'
  },
  {
    id: 6,
    title: 'USA Median Income Visualization',
    description: 'Interactive geographic visualization of American Community Survey (ACS) median income data across USA counties using mapview and R. Includes choropleth maps and statistical analysis.',
    technologies: ['R', 'mapview', 'Leaflet', 'Data Visualization', 'Geospatial'],
    github: 'https://github.com/kelvinmmuia/MedianincomeUSA',
    demo: 'https://kelvinmwakamuia.shinyapps.io/MedianincomeUSA/',
    image: 'https://kelvinmwakamuia.shinyapps.io/MedianincomeUSA/'
  },
  {
    id: 7,
    title: 'Kenya Population & Housing Census',
    description: 'Analysis and visualization of Kenya\'s 2009 and 2019 population and housing census data. Demographic analysis with county-level breakdowns and trend analysis.',
    technologies: ['R', 'Python', 'Data Analysis', 'LaTeX', 'Statistical Modeling'],
    github: 'https://github.com/kelvinmmuia/Kenya_population_and_housing_census_2009_and_2019',
    demo: 'https://github.com/kelvinmmuia/Kenya_population_and_housing_census_2009_and_2019/blob/main/KPHC_2009_2019.pdf',
    image: '/Kenya_Population_Housing_Census.png'
  },
  {
    id: 8,
    title: 'KPHC & Kenyan Counties Data',
    description: 'Visualization of Kenyan national and county-level demographic and economic data on interactive Leaflet maps. Includes census data and economic indicators by county.',
    technologies: ['R', 'Leaflet', 'Geospatial', 'Data Visualization', 'Interactive Maps'],
    github: 'https://github.com/kelvinmmuia/KPHC2019andKenyanCountiesData',
    demo: 'https://kelvinmwakamuia.shinyapps.io/KPHC2019andKenyanCountiesData/',
    image: 'https://kelvinmwakamuia.shinyapps.io/KPHC2019andKenyanCountiesData/'
  },
  {
    id: 9,
    title: 'Baby Names Popularity Dashboard',
    description: 'A dashboard to search for and get suggestions for baby names. Use the sliding and form inputs to specify the years, and get the trend of your favorite name over the years. Data from 1880 to 2022.',
    technologies: ['R', 'Shiny', 'Data Visualization', 'Interactive Dashboard', 'Rstudio'],
    github: 'https://github.com/kelvinmmuia/Babynames',
    demo: 'https://kelvinmwakamuia.shinyapps.io/babynames/',
    image: 'https://kelvinmwakamuia.shinyapps.io/babynames/'
  },
  {
    id: 10,
    title: 'TipsyData Blog',
    description: 'Static blog built with R, Hugo, and the Mainroad theme. Data science and analytics content with reproducible examples using R Markdown and Quarto.',
    technologies: ['R', 'Hugo', 'HTML', 'Markdown', 'Static Site Generation'],
    github: 'https://github.com/kelvinmmuia/TipsyData',
    demo: 'https://tipsydata.netlify.app/',
    image: 'https://tipsydata.netlify.app/'
  },
  {
    id: 11,
    title: 'CLOApp - AI Course Learning Outcomes',
    description: 'An AI-powered web application designed to revolutionize how educators and institutions manage course learning outcomes, curriculum mapping, and accreditation reporting. Built with modern technology and user experience in mind.',
    technologies: ['React', 'TypeScript', 'AI/ML', 'Web Development', 'Vercel'],
    github: 'https://github.com/kelvinmmuia',
    demo: 'https://cloapp.vercel.app/',
    image: 'https://cloapp.vercel.app/'
  },
  {
    id: 12,
    title: 'Code Humanizer',
    description: 'Make your AI-generated code undetectable and naturally readable. Perfect for students, developers, and anyone who wants their code to look authentically human-written.',
    technologies: ['React', 'TypeScript', 'AI/ML', 'Web Development', 'Vercel'],
    github: 'https://github.com/kelvinmmuia',
    demo: 'https://code-humanizer.vercel.app/',
    image: 'https://code-humanizer.vercel.app/'
  },
  {
    id: 13,
    title: 'Movie Database Management System',
    description: 'A comprehensive movie database application built with Streamlit and SQLite. Features include movie catalog management, actor/director relationships, advanced search capabilities, and a beautiful professional UI with blue and gray theme.',
    technologies: ['Python', 'Streamlit', 'SQLite', 'Database Management', 'Data Visualization'],
    github: 'https://github.com/kelvinmmuia/MoviesDBapp',
    demo: 'https://moviesdbapp.streamlit.app/',
    image: 'https://moviesdbapp.streamlit.app/'
  }
];

const Projects: FC<{ id: string }> = ({ id }) => {
  const isImageUrl = (url: string) => url.startsWith('http') && (url.includes('.png') || url.includes('.jpg') || url.includes('.jpeg'));

  return (
    <section id={id} className="section projects">
      <div className="container">
        <h2 className="section-title">
          <span>03.</span> Some Things I've Built
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                {isImageUrl(project.image) ? (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-image-link"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250"%3E%3Crect fill="%23333" width="400" height="250"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%23999" text-anchor="middle" dy=".3em"%3E' + project.title + '%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </a>
                ) : (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-image-link project-live-preview"
                  >
                    <div className="live-preview-placeholder">
                      <FiExternalLink size={40} />
                      <p>Live Preview</p>
                    </div>
                  </a>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && project.github !== 'https://github.com/kelvinmmuia' && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="project-link"
                      title="View on GitHub"
                    >
                      <FiGithub />
                    </a>
                  )}
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                    className="project-link"
                    title="View Live Demo"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
