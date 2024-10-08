import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="admin-row">
        <div className="admin-card">
          <h5 className="admin-card-title">Manage Freelancers</h5>
          <div className="admin-card-body">
            <button className="btn btn-outline-success" onClick={() => navigate('/admin/freelancers')}>
              List all Freelancers
            </button>
          </div>
        </div>
        <div className="admin-card">
          <h5 className="admin-card-title">Manage Skills</h5>
          <div className="admin-card-body">
            <button className="btn btn-outline-success" onClick={() => navigate('/admin/skills/add')}>
              Add new Skill
            </button>
            <button className="btn btn-outline-dark" onClick={() => navigate('/admin/skills')}>
              List all Skills
            </button>
          </div>
        </div>
        <div className="admin-card">
          <h5 className="admin-card-title">Manage Recruiters</h5>
          <div className="admin-card-body">
            <button className="btn btn-outline-warning" onClick={() => navigate('/admin/recruiters')}>
              List all Recruiters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
