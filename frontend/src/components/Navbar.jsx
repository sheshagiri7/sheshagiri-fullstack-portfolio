import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { PROFILE } from '../data/profile';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="brand-logo"
          onClick={(e) => handleNavClick(e, '#hero')}
          aria-label={`${PROFILE.name} Portfolio Home`}
        >
          <span className="brand-badge">
            <Terminal size={16} strokeWidth={2.5} />
          </span>
          <span className="brand-text">{PROFILE.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <nav className="container mobile-nav">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          background-color: transparent;
          z-index: 1000;
          transition: background-color var(--transition-normal), border-color var(--transition-normal);
          border-bottom: 1px solid transparent;
        }

        .navbar-scrolled {
          background-color: rgba(15, 23, 42, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom-color: var(--border-light);
        }

        .navbar-container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-weight: 700;
          font-size: 1.0625rem;
          letter-spacing: -0.01em;
          color: var(--white);
        }

        .brand-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background-color: var(--blue);
          color: var(--white);
          border-radius: var(--radius-sm);
        }

        .brand-text {
          font-family: var(--font-sans);
          font-weight: 700;
        }

        .desktop-nav {
          display: none;
        }

        @media (min-width: 769px) {
          .desktop-nav {
            display: block;
          }
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          list-style: none;
        }

        .nav-link {
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
          padding: 0.375rem 0;
        }

        .nav-link:hover {
          color: var(--white);
        }

        .nav-link.active {
          color: var(--white);
          font-weight: 600;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--blue);
          border-radius: 1px;
        }

        .mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid var(--border-light);
          color: var(--white);
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          cursor: pointer;
        }

        @media (min-width: 769px) {
          .mobile-toggle {
            display: none;
          }
        }

        .mobile-drawer {
          position: absolute;
          top: var(--header-height);
          left: 0;
          right: 0;
          background-color: rgba(15, 23, 42, 0.98);
          border-bottom: 1px solid var(--border-light);
          padding: 1.5rem 0 2rem;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-nav-link {
          display: block;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 1rem;
          border-left: 2px solid transparent;
        }

        .mobile-nav-link:hover {
          color: var(--white);
          background-color: var(--card-hover-bg);
        }

        .mobile-nav-link.active {
          color: var(--white);
          background-color: var(--blue-tint);
          border-left-color: var(--blue);
          font-weight: 600;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
