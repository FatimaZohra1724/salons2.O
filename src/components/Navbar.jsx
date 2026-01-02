import useTheme from '../hooks/useTheme';
import { useState } from 'react';

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    'home', 'about', 'services', 'interior', 
    'gallery', 'pricing', 'testimonials', 
    'locations', 'booking', 'contact'
  ];

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="logo">Mirror's Salon </div>
        
        {/* DESKTOP MENU */}
        <nav className="nav-menu">
          {navItems.map(id => (
            <a key={id} href={`#${id}`} className="nav-link">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        {/* THEME TOGGLE + MOBILE BURGER */}
        <div className="nav-actions">
          {/* <button className="theme-toggle" onClick={toggle}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button> */}
          
          {/* ✅ FIXED BURGER - THIS MAKES IT WORK */}
          <button 
            className={`burger-btn ${isMobileMenuOpen ? 'active' : ''}`} 
            onClick={toggleMobileMenu}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <nav className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map(id => (
            <a 
              key={id} 
              href={`#${id}`} 
              className="mobile-nav-link"
              onClick={closeMobileMenu}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}