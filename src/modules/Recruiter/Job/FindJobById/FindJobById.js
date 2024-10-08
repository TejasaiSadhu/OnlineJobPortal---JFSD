import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findJobById } from '../../../../services/JobService'; // Adjust path as needed
import './FindJobById.css'; // Import CSS file for styling

const FindJobById = () => {
  const { jobId } = useParams(); // Get jobId from route params
  const [job, setJob] = useState(null); // State to store job details
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch job details when component mounts
    const fetchJob = async () => {
      try {
        const response = await findJobById(jobId); // Fetch job details
        setJob(response); // Update job state with fetched data
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchJob();
  }, [jobId]); // Dependency array to re-run effect if jobId changes

  if (loading) {
    return <div className="loading">Loading...</div>; // Loading state with styling
  }

  if (error) {
    return <div className="error">Error: {error}</div>; // Error state with styling
  }

  return (
    <div className="job-details-container">
      <h1 className="job-title">Job Details</h1>
      {job ? (
        <div className="job-card">
          <h2>{job.jobTitle}</h2>
          <p><strong>Description:</strong> {job.jobDescription}</p>
          <p><strong>Skill:</strong> {job.skillName}</p>
        </div>
      ) : (
        <p className="no-job">No job found with ID: {jobId}</p>
      )}
    </div>
  );
};

export default FindJobById;
