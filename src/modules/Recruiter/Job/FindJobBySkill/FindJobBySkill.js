import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findJobsBySkill } from '../../../../services/JobService'; // Adjust path as needed
import './FindJobBySkill.css'; // Import external CSS for styling

const FindJobBySkill = () => {
  const { skill } = useParams(); // Get skill from route params
  const [jobsList, setJobsList] = useState([]); // State to store list of jobs
  const [skillName, setSkillName] = useState(''); // State to store skill name
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch jobs based on skill when component mounts
    const fetchJobs = async () => {
      try {
        const response = await findJobsBySkill(skill); // Fetch jobs by skill
        setJobsList(response); // Update jobsList state with fetched data
        setSkillName(skill); // Update skillName state
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchJobs();
  }, [skill]); // Dependency array to re-run effect if skill changes

  if (loading) {
    return <div className="loading">Loading...</div>; // Loading state with styling
  }

  if (error) {
    return <div className="error">Error: {error}</div>; // Error state with styling
  }

  return (
    <div className="job-skill-container">
      <div className="job-card">
        <h5 className="skill-heading">List of Jobs by Skill: {skillName}</h5>
        <div className="job-card-body">
          <table className="job-table">
            <thead>
              <tr>
                <th>Job Code</th>
                <th>Job Title</th>
                <th>Job Description</th>
              </tr>
            </thead>
            <tbody>
              {jobsList.map((job) => (
                <tr key={job.jobId}>
                  <td>{job.jobId}</td>
                  <td>{job.jobTitle}</td>
                  <td>{job.jobDescription}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FindJobBySkill;
