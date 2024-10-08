import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Recruiter.css'; // Ensure to create this CSS file if needed

const Recruiter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Inside recruiter');
  }, []);

  return (
    <div className="freelancer-container">
      <div className="freelancer-row">
        <div className="freelancer-card">
          <div className="freelancer-card-body">
            <h5 className="freelancer-card-title">Bookmark Freelancers</h5>
            <p className="card-text">Manage your Bookmarked Freelancers</p>
            <button className="btn btn-outline-success" onClick={() => navigate('/recruiter/bookmarkedFreelancers/')}>
              Manage Bookmarks
            </button>
          </div>
        </div>
        <div className="freelancer-card">
          <div className="freelancer-card-body">
            <h5 className="freelancer-card-title">Jobs</h5>
            <p className="card-text">Manage your Posted Jobs</p>
            <button className="btn btn-outline-warning" onClick={() => navigate('/recruiter/job')}>
              Manage Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiter;
