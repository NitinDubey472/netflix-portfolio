import React from 'react';
import './WorkPermit.css';
import { educationData } from '../data/portfolioData';

const WorkPermit: React.FC = () => {
  const data = educationData;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Education</h2>
        <p className="work-permit-summary">
          I'm currently pursuing a <strong>{data.degree}</strong> at <strong>{data.university}</strong> 🏫, located in {data.location}. My current CGPA is <strong>{data.cgpa}</strong> 📊, and my expected graduation is <strong>{data.duration}</strong> 🎓.
        </p>
        <p className="additional-info">{data.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
