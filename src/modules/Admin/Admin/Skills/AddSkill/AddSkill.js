import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSkill } from '../../../../../services/SkillService'; // Ensure this path is correct
import './AddSkill.css';

const AddSkill = () => {
  const [skillName, setSkillName] = useState('');
  const [skillDescription, setSkillDescription] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const newSkill = {
      name: skillName,
      description: skillDescription,
    };

    try {
      const data = await createSkill(newSkill);
      alert('Skill created successfully');
      console.log(data);
      navigate('/admin');
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Error creating skill. Please try again.');
      } else if (err.request) {
        setError('Network error. Please check your connection and try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  const handleGoBack = () => {
    navigate('/admin');
  };

  return (
    <div className="add-skill-container">
      <button className="back-button" onClick={handleGoBack}>Go Back</button>
      <div className="add-skill-card">
        <h5 className="add-skill-title">Add a New Skill</h5>
        <div className="add-skill-body">
          {error && <div className="alert alert-danger">{error}</div>}
          <form className="add-skill-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="skillName">Skill&nbsp;Name</label>
              <input
                id="skillName"
                className="form-control"
                type="text"
                placeholder="Skill Name"
                value={skillName}
                onChange={(e) => setSkillName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="skillDescription">Description</label>
              <input
                id="skillDescription"
                className="form-control"
                type="text"
                placeholder="Skill Description"
                value={skillDescription}
                onChange={(e) => setSkillDescription(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-outline-success" type="submit">Create Skill</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSkill;
