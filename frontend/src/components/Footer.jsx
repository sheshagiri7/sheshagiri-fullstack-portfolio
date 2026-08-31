import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="footer-name">{PROFILE.name}</span>
          <span className="footer-role">B.Tech AI & Data Science | Full Stack Developer</span>
        </div>

        <div className="footer-links">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="footer-link"
            aria-label="Send Email"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="copyright-text">
          &copy; {currentYear} {PROFILE.name}. Built with React.js, Express.js & MongoDB. All rights reserved.
        </p>
      </div>

      <style>{`
        .footer {
          background-color: var(--navy);
          border-top: 1px solid var(--border-light);
          padding: 3.5rem 0 2.5rem;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 769px) {
          .footer-container {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .footer-name {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--white);
        }

        .footer-role {
          font-size: 0.875rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
          padding: 0.375rem 0.625rem;
          border-radius: var(--radius-sm);
          border: 1px solid transparent;
          transition: all var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--white);
          background-color: var(--card-hover-bg);
          border-color: var(--border-light);
        }

        .footer-bottom {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .copyright-text {
          font-size: 0.8125rem;
          color: var(--text-muted);
          text-align: left;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
