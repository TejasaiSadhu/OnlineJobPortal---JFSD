import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllJobs, closeJob } from '../../../../services/JobService'; // Adjust path as needed
import './ListAllJobs.css'; // Import external CSS for styling

const ListAllJobs = () => {
  const [jobsList, setJobsList] = useState([]); // State to store list of jobs
  const [recruiterName, setRecruiterName] = useState(''); // State to store recruiter name
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Fetch all jobs when the component mounts
    const fetchJobs = async () => {
      try {
        const response = await getAllJobs(); // Fetch jobs
        setJobsList(response); // Update state with fetched data
        setRecruiterName(localStorage.getItem('recruiterUName') || ''); // Set recruiter name from localStorage
      } catch (err) {
        alert(err.message); // Handle errors
      }
    };

    fetchJobs();
  }, []);

  const handleCloseJob = async (jobId) => {
    try {
      await closeJob(jobId); // Close job
      alert('Job closed successfully');
      setJobsList((prevJobs) => prevJobs.filter((job) => job.jobId !== jobId)); // Remove job from list
    } catch (err) {
      alert(err.message); // Handle errors
    }
  };

  const handleViewApplications = (jobId) => {
    navigate(`/viewApps/${jobId}`); // Navigate to view applications
  };

  return (
    <div className="job-list-container">
      <div className="job-list-header">
        <h4>List of Jobs posted by {recruiterName}</h4>
      </div>
      <div className="job-list-content">
        <div className="job-list-table">
          <table>
            <thead>
              <tr>
                <th>Job Code</th>
                <th>Job Title</th>
                <th>Job Description</th>
                <th>Skill</th>
                <th colSpan="2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobsList.map((job) => (
                <tr key={job.jobId}>
                  <td>{job.jobId}</td>
                  <td>{job.jobTitle}</td>
                  <td>{job.jobDescription}</td>
                  <td>{job.skillName}</td>
                  <td>
                    <button
                      className="btn-close-job"
                      onClick={() => handleCloseJob(job.jobId)}
                      disabled={!job.jobStatus}
                    >
                      Close Job
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn-view-applications"
                      onClick={() => handleViewApplications(job.jobId)}
                      disabled={!job.jobStatus}
                    >
                      View Applications
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListAllJobs;
