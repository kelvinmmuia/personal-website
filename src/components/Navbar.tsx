import { FC } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

interface NavbarProps {
  activeSection: string;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: FC<NavbarProps> = ({ activeSection, isMenuOpen, toggleMenu }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="home" smooth={true} duration={500}>
            KM
          </Link>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => toggleMenu()}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
