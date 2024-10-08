import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllSkills } from '../../../../services/SkillService';
import './Skills.css';

const Skills = () => {
  const [skillsList, setSkillsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllSkills()
      .then(data => setSkillsList(data))
      .catch(err => alert('Error fetching data: ' + err.message));
  }, []);

  const goBack = () => {
    navigate('/admin');
  };

  return (
    <div className="skills-container">
      <button className="back-button" onClick={goBack}>
        Go Back
      </button>
      <div className="skills-card">
        <h5 className="skills-title">Skills List</h5>
        <div className="skills-body">
          <table className="skills-table">
            <thead>
              <tr>
                <th>Unique Id</th>
                <th>Skill Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {skillsList.map(skill => (
                <tr key={skill.id}>
                  <td>{skill.id}</td>
                  <td>{skill.name}</td>
                  <td>{skill.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Skills;
