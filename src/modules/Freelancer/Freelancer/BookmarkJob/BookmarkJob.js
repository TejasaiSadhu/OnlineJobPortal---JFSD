import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findJobById } from '../../../../services/JobService'; // Adjust the import path if necessary
import './BookmarkJob.css'; // Ensure this file is imported

const BookmarkJob = () => {
  const [bkdJobId, setBkdJobId] = useState('');
  const navigate = useNavigate();

  const handleIdChange = (e) => setBkdJobId(e.target.value);

  const listJobs = () => {
    navigate('listJobs');
  };

  const findById = async () => {
    localStorage.setItem('bkdJobId', bkdJobId);
    console.log('Fetch Details of Bookmark Number:', Number(localStorage.getItem('bkdJobId')));

    try {
      const data = await findJobById(bkdJobId);
      if (data) {
        alert('Bookmark Present: ' + JSON.stringify(data)); // Debug to ensure correct data
        navigate(`find/${bkdJobId}`); // Ensure this path matches your route
      } else {
        alert('Bookmark not found');
        navigate('');
      }
    } catch (err) {
      alert('Error: ' + err.message);
      navigate('');
    }
  };

  const goBack = () => {
    navigate('/freelancer');
  };

  return (
    <div className="freelancer-container">
      <button className="btn btn-back" onClick={goBack}>Go Back</button>
      <div className="freelancer-row">
        <div className="freelancer-card">
          <div className="freelancer-card-body">
            <h5 className="freelancer-card-title">Bookmark a Job</h5>
            <button className="btn btn-outline-success" onClick={listJobs}>List Active Jobs</button>
          </div>
        </div>
        <div className="freelancer-card">
          <div className="freelancer-card-body">
            <h5 className="freelancer-card-title">Find a Bookmark By Id</h5>
            <input
              className="form-control"
              type="number"
              id="bkdJobId"
              name="bkdJobId"
              placeholder="Bookmarked Job Id"
              value={bkdJobId}
              onChange={handleIdChange}
            />
            <button className="btn btn-outline-primary mt-2" onClick={findById}>Find By Id</button>
          </div>
        </div>
        <div className="freelancer-card">
          <div className="freelancer-card-body">
            <h5 className="freelancer-card-title">List Bookmarks</h5>
            <button className="btn btn-outline-warning" onClick={() => navigate('list')}>View List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkJob;
