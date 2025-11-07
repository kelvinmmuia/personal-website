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
    image: 'https://via.placeholder.com/400x250?text=SVM+Algorithm'
  },
  {
    id: 2,
    title: 'Kenyan Climate Data Timeseries',
    description: 'Predictive analysis of Kenyan temperature and rainfall data using timeseries forecasting techniques. Includes data preprocessing, exploratory analysis, and ARIMA/Prophet models for climate prediction.',
    technologies: ['Python', 'R', 'Data Analysis', 'Timeseries', 'Visualization'],
    github: 'https://github.com/kelvinmmuia/Kenyan_Climate_Data_Timeseries',
    demo: 'https://github.com/kelvinmmuia/Kenyan_Climate_Data_Timeseries',
    image: 'https://via.placeholder.com/400x250?text=Climate+Analysis'
  },
  {
    id: 3,
    title: 'Kenya Economic Survey 2023',
    description: 'Analysis and visualization of Kenyan economic indicators reported by KNBS in 2023. Includes interactive dashboards and statistical summaries of key economic metrics.',
    technologies: ['Python', 'R', 'Data Visualization', 'SQL', 'Pandas'],
    github: 'https://github.com/kelvinmmuia/Kenya_Economic_Survey_Report_2023',
    demo: 'https://github.com/kelvinmmuia/Kenya_Economic_Survey_Report_2023',
    image: 'https://via.placeholder.com/400x250?text=Economic+Data'
  },
  {
    id: 4,
    title: 'Gapminder Data Visualization',
    description: 'Global demographic and economic data visualization project. Interactive visualizations of world development indicators including GDP, life expectancy, and population trends.',
    technologies: ['R', 'ggplot2', 'Data Visualization', 'Plotly', 'Shiny'],
    github: 'https://github.com/kelvinmmuia/GapminderDataVisualization',
    demo: 'https://github.com/kelvinmmuia/GapminderDataVisualization',
    image: 'https://via.placeholder.com/400x250?text=Gapminder+Viz'
  },
  {
    id: 5,
    title: 'Optimal Stopping Problem',
    description: 'Mathematical analysis and implementation of the optimal stopping problem (Secretary Problem). Includes house hunting scenarios and decision theory applications with interactive demonstrations.',
    technologies: ['HTML', 'Python', 'Mathematics', 'Statistics', 'Algorithms'],
    github: 'https://github.com/kelvinmmuia/TheOptimalStoppingProblem',
    demo: 'https://github.com/kelvinmmuia/TheOptimalStoppingProblem',
    image: 'https://via.placeholder.com/400x250?text=Optimal+Stopping'
  },
  {
    id: 6,
    title: 'M-Pesa API Integration',
    description: 'Django framework integration for M-Pesa payment processing. Implements B2C, C2B, and STK Push functionality based on Safaricom\'s latest APIs for Kenyan mobile money transactions.',
    technologies: ['Python', 'Django', 'REST API', 'M-Pesa', 'Payment Integration'],
    github: 'https://github.com/kelvinmmuia/mpesa_api',
    demo: 'https://github.com/kelvinmmuia/mpesa_api',
    image: 'https://via.placeholder.com/400x250?text=M-Pesa+API'
  },
  {
    id: 7,
    title: 'Kenya Employment Analysis',
    description: 'Comprehensive analysis of employment trends in Kenya from 2010-2019. Statistical analysis and visualizations of employment data across sectors and regions.',
    technologies: ['R', 'Python', 'Data Analysis', 'Statistics', 'Visualization'],
    github: 'https://github.com/kelvinmmuia/Total_estimated_employment_in_kenya_2010_2019',
    demo: 'https://github.com/kelvinmmuia/Total_estimated_employment_in_kenya_2010_2019',
    image: 'https://via.placeholder.com/400x250?text=Employment+Data'
  },
  {
    id: 8,
    title: 'USA Median Income Visualization',
    description: 'Interactive geographic visualization of American Community Survey (ACS) median income data across USA counties using mapview and R. Includes choropleth maps and statistical analysis.',
    technologies: ['R', 'mapview', 'Leaflet', 'Data Visualization', 'Geospatial'],
    github: 'https://github.com/kelvinmmuia/MedianincomeUSA',
    demo: 'https://github.com/kelvinmmuia/MedianincomeUSA',
    image: 'https://via.placeholder.com/400x250?text=USA+Income+Map'
  },
  {
    id: 9,
    title: 'Kenya Population & Housing Census',
    description: 'Analysis and visualization of Kenya\'s 2009 and 2019 population and housing census data. Demographic analysis with county-level breakdowns and trend analysis.',
    technologies: ['R', 'Python', 'Data Analysis', 'LaTeX', 'Statistical Modeling'],
    github: 'https://github.com/kelvinmmuia/Kenya_population_and_housing_census_2009_and_2019',
    demo: 'https://github.com/kelvinmmuia/Kenya_population_and_housing_census_2009_and_2019',
    image: 'https://via.placeholder.com/400x250?text=Census+Data'
  },
  {
    id: 10,
    title: 'KPHC & Kenyan Counties Data',
    description: 'Visualization of Kenyan national and county-level demographic and economic data on interactive Leaflet maps. Includes census data and economic indicators by county.',
    technologies: ['R', 'Leaflet', 'Geospatial', 'Data Visualization', 'Interactive Maps'],
    github: 'https://github.com/kelvinmmuia/KPHC2019andKenyanCountiesData',
    demo: 'https://github.com/kelvinmmuia/KPHC2019andKenyanCountiesData',
    image: 'https://via.placeholder.com/400x250?text=Counties+Map'
  },
  {
    id: 11,
    title: 'Empirical Finance Analysis',
    description: 'Empirical finance research and analysis using R. Includes financial modeling, portfolio analysis, and quantitative finance applications.',
    technologies: ['R', 'Finance', 'Quantitative Analysis', 'Statistics', 'Time Series'],
    github: 'https://github.com/kelvinmmuia/EmpiricalFinance',
    demo: 'https://github.com/kelvinmmuia/EmpiricalFinance',
    image: 'https://via.placeholder.com/400x250?text=Finance+Analysis'
  },
  {
    id: 12,
    title: 'TipsyData Blog',
    description: 'Static blog built with R, Hugo, and the Mainroad theme. Data science and analytics content with reproducible examples using R Markdown and Quarto.',
    technologies: ['R', 'Hugo', 'HTML', 'Markdown', 'Static Site Generation'],
    github: 'https://github.com/kelvinmmuia/TipsyData',
    demo: 'https://github.com/kelvinmmuia/TipsyData',
    image: 'https://via.placeholder.com/400x250?text=TipsyData+Blog'
  }
];

const Projects: FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="section projects">
      <div className="container">
        <h2 className="section-title">
          <span>03.</span> Some Things I've Built
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
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
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FiGithub />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
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
