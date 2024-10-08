// src/modules/Job/Job.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Job.css'; // Ensure to create this CSS file if needed

const Job = () => {
  const [skill, setSkill] = useState('');
  const navigate = useNavigate();

  const handleFindBySkill = () => {
    navigate(`/findSkill/${skill}`);
  };

  const handleGoBack = () => {
    navigate('/recruiter');
  };

  return (
    <div className="container-fluid overflow-hidden">
      <div className="row mt-3">
        <div className="col p-3 w-100 align-self-stretch">
          <div className="card shadow border-5 rounded-3 text-center bg-light bg-gradient">
            <div className="card-body">
              <h5 className="card-title">Post A Job Opening</h5>
              <p className="card-text">Fill your empty positions</p>
              <button className="btn btn-success" onClick={() => navigate('/create')}>Create new Job</button>
            </div>
          </div>
        </div>
        <div className="col p-3">
          <div className="card shadow border-5 rounded-3 text-center bg-light bg-gradient">
            <div className="card-body">
              <h5 className="card-title">List Jobs</h5>
              <p className="card-text">View All Posted Jobs</p>
              <button className="btn btn-info" onClick={() => navigate('/list')}>Manage Jobs</button>
            </div>
          </div>
        </div>
        <div className="col p-3">
          <div className="card shadow border-5 rounded-3 text-center bg-light bg-gradient">
            <div className="card-body">
              <h5 className="card-title">Jobs by Skill</h5>
              <p className="card-text">View All Jobs for a Skill</p>
              <input
                className="form-control"
                type="text"
                name="findBySkill"
                id="findBySkill"
                placeholder="Skill Name"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
              />
              <button className="btn btn-dark mt-2" onClick={handleFindBySkill}>View Jobs</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center mt-5">
        <div className="col-5"></div>
        <div className="col-2">
          <button className="btn btn-danger" onClick={handleGoBack}>Go Back</button>
        </div>
        <div className="col-5"></div>
      </div>
      <hr />
    </div>
  );
};

export default Job;
