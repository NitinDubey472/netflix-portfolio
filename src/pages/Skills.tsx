import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaGitAlt, FaJava, FaCode, FaRocket, FaBug } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiMysql, SiFirebase, SiArduino, SiVisualstudiocode, SiAndroidstudio, SiImessage, SiPython } from 'react-icons/si';
import { skillsData } from '../data/portfolioData';

const iconMap: { [key: string]: JSX.Element } = {
  FaPython: <SiPython />,
  FaJava: <FaJava />,
  SiJavascript: <SiJavascript />,
  SiC: <SiCplusplus />,
  SiCplusplus: <SiCplusplus />,
  SiMysql: <SiMysql />,
  FaReact: <FaReact />,
  SiFirebase: <SiFirebase />,
  SiArduino: <SiArduino />,
  FaGitAlt: <FaGitAlt />,
  SiVisualstudiocode: <SiVisualstudiocode />,
  SiAndroidstudio: <SiAndroidstudio />,
  FaCode: <FaCode />,
  SiImessage: <SiImessage />,
  FaHandsHelping: <FaHandsHelping />,
  FaRocket: <FaRocket />,
  FaBug: <FaBug />,
  FaNodeJs: <FaNodeJs />,
};

const Skills: React.FC = () => {
  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaCode />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
