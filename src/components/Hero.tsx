import { FC } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero: FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="hero">
      <div className="container">
        <div className="hero-content">
          <h4 className="greeting">Hi, my name is</h4>
          <h1 className="name">Kelvin Mwaka Muia.</h1>
          <h2 className="title">Data Scientist & Web Developer.</h2>
          <p className="description">
            I'm a passionate data scientist and self-taught web developer specializing in building data-driven applications 
            and exceptional digital experiences. I combine data analytics, machine learning, and modern web technologies 
            to create impactful solutions.
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
        
        <div className="social-links">
          <a href="https://github.com/kelvinmmuia" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/kelvin-mwaka-muia" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/kelvinmwakamuia" target="_blank" rel="noopener noreferrer" title="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
