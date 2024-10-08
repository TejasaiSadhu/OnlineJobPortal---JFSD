// src/modules/Feedback/AddFeedback.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Make sure you have axios installed or use fetch API
import './AddFeedback.css'; // Ensure to create this CSS file if needed

const AddFeedback = () => {
  const { frId } = useParams();
  const [ratings, setRatings] = useState('');
  const [comments, setComments] = useState('');
  const [recruiterId, setRecruiterId] = useState('');

  useEffect(() => {
    setRecruiterId(localStorage.getItem('recruiterUName'));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newFeedback = {
      ratings: ratings,
      comments: comments,
      recruiterUName: recruiterId,
      freelancerUName: frId
    };

    axios.post('your-api-url/addFeedback', newFeedback)
      .then(response => {
        alert(response.data);
        // Optionally, you can close the modal here if needed
      })
      .catch(error => {
        console.error(error);
        alert('An error occurred while adding feedback');
      });
  };

  return (
    <div className="card border-5 shadow mt-5 bg-light bg-gradient">
      <div className="card-body">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text">Ratings</span>
            <input
              className="form-control"
              type="number"
              name="ratings"
              id="ratings"
              value={ratings}
              onChange={(e) => setRatings(e.target.value)}
              placeholder="Enter a value between 1 to 5"
              min="1"
              max="5"
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Comments</span>
            <textarea
              className="form-control"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="input-group d-grid gap-2 mx-auto">
            <button className="btn btn-outline-success" type="submit">Post Comment</button>
            <button className="btn btn-outline-danger" type="button" onClick={() => {
              setRatings('');
              setComments('');
            }}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFeedback;
