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
            <h4 className="greeting">Hi, my name is</h4>
            <h1 className="name">Kelvin Mwaka Muia.</h1>
            <h2 className="title">Data Scientist & Data Analyst based in Nairobi, Kenya.</h2>
            <p className="description">
              I'm a passionate data scientist and analyst with 6+ years of experience building data-driven applications 
              and interactive visualizations. I specialize in end-to-end data analysis, combining statistical modeling, 
              machine learning, and modern web technologies to create impactful solutions for real-world problems.
            </p>
            <div className="cta-buttons">
              <a 
                href="#contact" 
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
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
