// src/Freelancer/CreateBookmark/CreateBookmark.js
import React, { useState } from 'react';
import { createBookmark } from '../../../../services/BookmarkedJobService'; // Updated import
import './CreateBookmark.css';

const CreateBookmark = () => {
  const [skillId, setSkillId] = useState('');
  const [jobId, setJobId] = useState('');
  const [freelancerId, setFreelancerId] = useState('');

  const handleSkillChange = (e) => setSkillId(e.target.value);
  const handleJobChange = (e) => setJobId(e.target.value);
  const handleFreelancerChange = (e) => setFreelancerId(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBookmark = {
      skillId,
      jobId,
      freelancerId,
    };

    try {
      await createBookmark(newBookmark); // Updated function call
      alert('Bookmark created!');
      setSkillId('');
      setJobId('');
      setFreelancerId('');
    } catch (error) {
      alert('Error creating bookmark: ' + error.message);
    }
  };

  return (
    <div className="add-skill-container">
      <button className="back-button">Back</button>
      <div className="add-skill-card">
        <h5 className="add-skill-title">Create a New Bookmark</h5>
        <div className="add-skill-body">
          <form className="add-skill-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="skillId">Skill ID</label>
              <input
                id="skillId"
                className="form-control"
                type="text"
                placeholder="Enter Skill ID"
                value={skillId}
                onChange={handleSkillChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobId">Job ID</label>
              <input
                id="jobId"
                className="form-control"
                type="text"
                placeholder="Enter Job ID"
                value={jobId}
                onChange={handleJobChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="freelancerId">Freelancer ID</label>
              <input
                id="freelancerId"
                className="form-control"
                type="text"
                placeholder="Enter Freelancer ID"
                value={freelancerId}
                onChange={handleFreelancerChange}
                required
              />
            </div>
            <button className="btn btn-outline-success" type="submit">
              Create Bookmark
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBookmark;
