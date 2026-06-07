import React from 'react';
import './Blogs.css';
import { FaGithub } from 'react-icons/fa';
import { githubProjectsData } from '../data/portfolioData';

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">💻 My GitHub Projects</h2>
      <p className="blogs-intro">A collection of my projects and repositories on GitHub.</p>
      <div className="blogs-grid">
        {githubProjectsData.map((project, index) => (
          <a href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon"><FaGithub /></div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{project.title}</h3>
              <p className="blog-description">{project.description}</p>
              <span className="blog-platform">{project.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
