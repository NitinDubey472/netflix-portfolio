import React from 'react';
import './Recommendations.css';
import { leadershipData } from '../data/portfolioData';

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <h2 style={{ color: '#fff', marginBottom: '24px', fontSize: '1.8rem' }}>🏆 Leadership & Activities</h2>
      {leadershipData.map((activity, index) => (
        <div className="recommendation-card" key={index} style={{ marginBottom: '16px' }}>
          <div className="recommendation-header">
            <div>
              <h3>{activity.title}</h3>
              <p className="date">{activity.date}</p>
            </div>
          </div>
          <div className="recommendation-body">
            <p>{activity.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
