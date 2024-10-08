import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAll } from '../../../../services/BookmarkedJobService'; // Adjust the import path if necessary
import { getBookmarkedFreelancerById } from '../../../../services/BookmarkedFreelancerService'; // Adjust the import path if necessary
import './ListBookmarkedJobs.css';

const ListBookmarkedJobs = () => {
  const [bookmarksList, setBookmarksList] = useState([]);
  const [freelancerName, setFreelancerName] = useState('');
  const freelancerId = Number(localStorage.getItem('freelancerId'));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFreelancerName = async () => {
      try {
        const freelancerData = await getBookmarkedFreelancerById(freelancerId);
        setFreelancerName(freelancerData.userName);
        localStorage.setItem('freelancerUName', freelancerData.userName);
      } catch (err) {
        alert('Error fetching freelancer details: ' + err.message);
      }
    };

    const fetchBookmarkedJobs = async () => {
      try {
        const jobsData = await getAll(freelancerId);
        setBookmarksList(jobsData);
      } catch (err) {
        alert('Error fetching bookmarked jobs: ' + err.message);
      }
    };

    fetchFreelancerName();
    fetchBookmarkedJobs();
  }, [freelancerId]);

  const applyToJob = (jobId) => {
    navigate(`/bmark/job/apply/${jobId}`); // Navigate to the apply route
  };

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="container-fluid">
      <button className="back-button" onClick={goBack}>
        Back
      </button>
      <h5 className="text-center">List of Bookmarks by {freelancerName}</h5>
      <div className="table-container">
        <table className="table table-striped table-hover table-primary text-center table-responsive">
          <thead>
            <tr>
              <th>Bookmark Id</th>
              <th>Job Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookmarksList.map(job => (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.jobName}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => applyToJob(job.jobId)}>
                    Apply to Job
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBookmarkedJobs;
