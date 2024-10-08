import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../../../../services/BookmarkedJobService'; // Import the service function
import './FindJobById.css';

const FindJobById = () => {
  const { id } = useParams(); // Use useParams to get the route parameter
  const [bookmarkedJob, setBookmarkedJob] = useState(null);
  const [jobExistsById, setJobExistsById] = useState(true);

  useEffect(() => {
    // Use the service function to get the bookmarked job by ID
    getById(id)
      .then(data => {
        if (data) {
          setBookmarkedJob(data);
        } else {
          setJobExistsById(false);
        }
      })
      .catch(err => {
        alert('Error: ' + err.message);
        setJobExistsById(false);
      });
  }, [id]);

  if (!jobExistsById) {
    return <div className="no-job-message">Job with ID {id} not found.</div>;
  }

  return (
    <div className="job-details-container">
      <button className="back-button" onClick={() => window.history.back()}>
        Back
      </button>

      <div className="card">
        <h5 className="card-title">Bookmarked Job Details</h5>
        <div className="card-body">
          <table className="table table-hover table-primary table-responsive">
            <thead>
              <tr>
                <th>Bookmark Id</th>
                <th>Job Title</th>
              </tr>
            </thead>
            <tbody>
              {bookmarkedJob && (
                <tr>
                  <td>{bookmarkedJob.id}</td>
                  <td>{bookmarkedJob.job.jobTitle}</td>
                </tr>
              )}
            </tbody>
          </table>

          <h5 className="text-center">Skills Required</h5>
          <table className="table table-warning skills-table table-bordered table-hover table-sm table-responsive">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {bookmarkedJob && bookmarkedJob.skill && (
                <tr>
                  <td>{bookmarkedJob.skill.name}</td>
                  <td>{bookmarkedJob.skill.description}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FindJobById;
