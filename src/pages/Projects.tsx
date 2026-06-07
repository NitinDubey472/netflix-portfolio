import React from 'react';
import './Projects.css';
import { FaPython, FaRaspberryPi } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import { projectsData } from '../data/portfolioData';

const techIcons: { [key: string]: JSX.Element } = {
  'Python': <FaPython />,
  'Deep Learning': <FaPython />,
  'CNN': <FaPython />,
  'Firebase': <SiFirebase />,
  'Raspberry Pi': <FaRaspberryPi />,
  'IoT': <FaRaspberryPi />,
};

const Projects: React.FC = () => {
  const projects = projectsData;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
