import { FC } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a 
              href="https://github.com/kelvinmmuia" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/kelvin-mwaka-muia" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://twitter.com/kelvinmwakamuia" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
          
          <p className="footer-text">
            Designed & Built with <FaHeart className="heart-icon" /> by Kelvin Mwaka Muia
          </p>
          
          <p className="copyright">
            &copy; {currentYear} Kelvin Mwaka Muia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
