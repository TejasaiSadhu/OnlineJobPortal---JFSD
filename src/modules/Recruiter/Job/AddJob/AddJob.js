import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as JobService from '../../../../services/JobService';
import * as SkillService from '../../../../services/SkillService';
import './AddJob.css'; // Import the CSS file

const AddJob = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [skillId, setSkillId] = useState('');
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all skills when the component mounts
    const fetchSkills = async () => {
      try {
        const response = await SkillService.getAllSkills(); 
        setSkills(response);
      } catch (error) {
        alert('Error fetching skills: ' + error.message);
      }
    };

    fetchSkills();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postJob = {
      jobTitle,
      jobDescription,
      skillId,
      recruiterId: Number(localStorage.getItem('recruiterId')), // Ensure recruiterId is stored in localStorage
    };

    try {
      await JobService.addJob(postJob);
      alert('Job posted successfully!');
      navigate('/jobs');
    } catch (error) {
      alert('Error posting job: ' + error.message);
    }
  };

  return (
    <div className="add-job-container">
      <h4 className="title">Create A New Job Opening</h4>
      <div className="job-form-container">
        <form className="job-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="jobDescription">Job Description</label>
            <textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="skillList">Skill</label>
            <select
              id="skillList"
              value={skillId}
              onChange={(e) => setSkillId(e.target.value)}
              required
            >
              <option value="">Select a skill</option>
              {skills.map((skill) => (
                <option key={skill.id} value={skill.id}>
                  {skill.name}
                </option>
              ))}
            </select>
          </div>

          <button className="submit-button" type="submit">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
