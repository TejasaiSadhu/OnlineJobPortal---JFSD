// src/modules/Feedback/Feedback.js

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure you have axios installed or use fetch API
import './Feedback.css'; // Ensure to create this CSS file if needed

const Feedback = () => {
  const { frId } = useParams();
  const [feedbacks, setFeedbacks] = useState([]);
  const [avgFeedback, setAvgFeedback] = useState(0);
  const [recruiterId, setRecruiterId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setRecruiterId(localStorage.getItem('recruiterUName'));

    axios.get(`your-api-url/feedbacks/${frId}?recruiterId=${recruiterId}`)
      .then(response => {
        setFeedbacks(response.data);
      })
      .catch(error => {
        alert(error.response?.data || 'An error occurred');
      });

    axios.get(`your-api-url/averageFeedback/${frId}`)
      .then(response => {
        setAvgFeedback(response.data);
      })
      .catch(error => {
        alert(error.response?.data || 'An error occurred');
      });
  }, [frId, recruiterId]);

  const addFeedback = () => {
    navigate(`/addFeedback/${frId}`);
  };

  const goBack = () => {
    navigate('/recruiter/bmark/freelancer/list');
  };

  return (
    <div className="container-fluid overflow-hidden">
      <div className="row text-center">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="card mt-2">
            <h4 className="card-title mb-2 display-6">Feedbacks</h4>
            <h5 className="card-subtitle mb-2">Manage your feedbacks for {frId}</h5>
            <div className="card-body">
              <table className="table table-striped table-hover table-warning">
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Feedback</td>
                    <td>Ratings</td>
                  </tr>
                </thead>
                <tbody>
                  {feedbacks.map(feedback => (
                    <tr key={feedback.id}>
                      <td>{feedback.id}</td>
                      <td>{feedback.comments}</td>
                      <td>{feedback.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="row">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Add Feedback
                  </button>
                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Add a new Feedback</h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {/* Render your AddFeedback component here */}
                          <AddFeedback />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <p>
                    Average Ratings:{' '}
                    <input
                      className="form-control-plaintext text-center fw-bold fs-4"
                      type="text"
                      value={avgFeedback}
                      disabled
                      readOnly
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row text-center mt-5">
        <div className="col-5"></div>
        <div className="col-2">
          <button className="btn btn-danger" onClick={goBack}>
            Go Back
          </button>
        </div>
        <div className="col-5"></div>
      </div>
    </div>
  );
};

// Placeholder for the AddFeedback component; you need to implement this.
const AddFeedback = () => (
  <div>
    {/* Implement AddFeedback form here */}
    <h6>Add Feedback Form Placeholder</h6>
  </div>
);

export default Feedback;
