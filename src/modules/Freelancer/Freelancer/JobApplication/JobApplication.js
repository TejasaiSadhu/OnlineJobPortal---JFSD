import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { applyToJob } from '../../../../services/JobApplicationService'; // Adjust the import path if necessary
import './JobApplication.css';

const JobApplication = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState({});
  const [coverLetter, setCoverLetter] = useState('');
  const freelancerId = Number(localStorage.getItem('freelancerId'));
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch job details by ID
    fetch(`/api/jobs/${id}`) // Replace with your actual API endpoint for job details
      .then(response => response.json())
      .then(data => {
        setJobDetails(data);
      })
      .catch(err => {
        alert('Error: ' + err.message);
      });
  }, [id]);

  const handleApply = async () => {
    const jobApplication = {
      coverLetter,
      jobId: id,
      freelancerId
    };

    try {
      await applyToJob(jobApplication);
      alert('Application submitted successfully');
      navigate('../job', { relativeTo: navigate });
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="card shadow-lg text-center bg-light bg-gradient">
            <h4 className="card-title">Applying to Job: {jobDetails.jobTitle}</h4>
            <div className="card-body">
              <div className="input-group mb-3">
                <span className="input-group-text">Cover Letter</span>
                <textarea
                  className="form-control"
                  placeholder="Write your cover letter here."
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={handleApply}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default JobApplication;
