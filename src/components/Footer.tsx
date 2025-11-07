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
              href="https://www.linkedin.com/in/kelvin-mwaka-muia/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://x.com/kmwakamuia" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              title="X (Twitter)"
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
