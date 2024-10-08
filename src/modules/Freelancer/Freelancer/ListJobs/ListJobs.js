import React, { useEffect, useState } from 'react';
import { getAllActive, awardJob } from '../../../../services/JobService'; // Adjust the import path as necessary
import './ListJobs.css';

const ListJobs = () => {
  const [activeJobsList, setActiveJobsList] = useState([]);
  const freelancerId = Number(localStorage.getItem('freelancerId'));

  useEffect(() => {
    const fetchActiveJobs = async () => {
      try {
        const jobs = await getAllActive();
        setActiveJobsList(jobs);
      } catch (err) {
        alert('Error: ' + err.message);
      }
    };

    fetchActiveJobs();
  }, []);

  const addBookmark = async (jobId) => {
    try {
      await awardJob(jobId, freelancerId);
      alert('Bookmarked Successfully');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="container-fluid">
      <h3 className="text-center">Active Jobs list</h3>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 card">
          <table className="table table-striped table-hover table-warning text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>Job Title</th>
                <th>Job Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {activeJobsList.map(job => (
                <tr key={job.jobId}>
                  <td>{job.jobId}</td>
                  <td>{job.jobTitle}</td>
                  <td>{job.jobDescription}</td>
                  <td>
                    <button className="btn btn-success" onClick={() => addBookmark(job.jobId)}>
                      Bookmark
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default ListJobs;
