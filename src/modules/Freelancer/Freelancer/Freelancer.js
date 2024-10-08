// src/Freelancer/Freelancer.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Freelancer.css';

const Freelancer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hasReloaded = localStorage.getItem('hasReloaded');
    if (!hasReloaded) {
      localStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <div className="freelancer-container">
      <div className="freelancer-row">
        <div className="freelancer-card">
          <h5 className="freelancer-card-title">Bookmark Jobs</h5>
          <div className="freelancer-card-body">
            <button className="btn btn-outline-success" onClick={() => navigate('/freelancer/bmark/job')}>
              Explore Bookmarks
            </button>
          </div>
        </div>
        <div className="freelancer-card">
          <h5 className="freelancer-card-title">Skills</h5>
          <div className="freelancer-card-body">
            <button className="btn btn-outline-primary" onClick={() => navigate('/freelancer/skills')}>
              Explore Skills
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelancer;
