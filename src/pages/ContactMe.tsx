import React from 'react';
import './ContactMe.css';
import { FaEnvelope, FaCoffee, FaLinkedin, FaGithub } from 'react-icons/fa';
import { contactMeData } from '../data/portfolioData';

const ContactMe: React.FC = () => {
  const userData = contactMeData;

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <div className="badge-avatar-placeholder">ND</div>
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">
            {userData.summary}
          </p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <div className="badge-links">
            <a
              href={userData.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              <FaLinkedin className="linkedin-icon" /> LinkedIn
            </a>
            <a
              href="https://github.com/NitinDubey472"
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link github-link"
            >
              <FaGithub className="github-icon" /> GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
