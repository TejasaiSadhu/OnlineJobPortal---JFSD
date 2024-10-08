import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as BookmarkedFreelancerService from '../../../services/BookmarkedFreelancerService';
import './BookmarkedFreelancer.css';

const BookmarkedFreelancer = () => {
  const [bkdFrId, setBkdFrId] = useState('');
  const navigate = useNavigate();

  const listFreelancers = () => {
    navigate('/recruiter/listFreelancers');
  };

  const findById = () => {
    const id = Number(bkdFrId);
    localStorage.setItem('bkdFrId', String(id));
    console.log("Fetch Details of Bookmark Number: " + id);

    BookmarkedFreelancerService.getBookmarkedFreelancerById(id)
      .then(response => {
        console.log(response);
        alert("Bookmark Present");
        navigate(`find/${id}`);
      })
      .catch(error => {
        alert(error.response?.data || 'An error occurred');
        navigate(-1);
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container-fluid overflow-hidden">
      <div className="row mt-4">
        <div className="col p-3">
          <div className="card shadow border-5 rounded-3 text-center">
            <div className="card-body">
              <h5 className="card-title">Bookmark a Freelancer</h5>
              <button className="btn btn-success" onClick={listFreelancers}>
                List Freelancers
              </button>
            </div>
          </div>
        </div>
        <div className="col p-3">
          <div className="card shadow border-5 rounded-3 text-center">
            <div className="card-body">
              <h5 className="card-title">Find a Bookmark By Id</h5>
              <input
                className="form-control"
                type="number"
                value={bkdFrId}
                onChange={(e) => setBkdFrId(e.target.value)}
                placeholder="Bookmarked Freelancer Id"
              />
              <button className="btn btn-primary mt-2" onClick={findById}>
                Find By Id
              </button>
            </div>
          </div>
        </div>
        <div className="col p-3">
          <div className="card shadow border-5 rounded-3 text-center">
            <div className="card-body">
              <h5 className="card-title">List Bookmarks</h5>
              <button className="btn btn-warning" onClick={() => navigate('/recruiter/listBookmarks')}>
                View List
              </button>
            </div>
          </div>
        </div>
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
      <hr />
    </div>
  );
};

export default BookmarkedFreelancer;
