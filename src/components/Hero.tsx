import { FC } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

const Hero: FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <img 
                src={profileImage}
                alt="Kelvin Mwaka Muia" 
                className="hero-profile-image"
              />
            </div>
          </div>
          
          <div className="hero-content">
            <div className="availability"><span aria-hidden="true" /> Open to remote and Nairobi-based roles</div>
            <h1 className="name">Kelvin Mwaka Muia.</h1>
            <h2 className="title">Data analyst and software developer building clear reports and usable tools.</h2>
            <p className="description">
              Based in Nairobi, I use SQL, Python, R, and Excel to analyse data and explain findings. I also build dashboards and database-backed products with Shiny, Streamlit, React, and TypeScript.
            </p>
            <div className="cta-buttons">
              <a 
                href="#projects" 
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore selected work
              </a>
              <a 
                href="https://github.com/kelvinmmuia" 
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" /> GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/kelvinmmuia" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kelvin-mwaka-muia/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://x.com/kmwakamuia" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
