import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findAll } from '../../../../services/RecruiterService';
import './Recruiters.css';

const Recruiters = () => {
  const [recruitersList, setRecruitersList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    findAll()
      .then(data => setRecruitersList(data))
      .catch(err => alert('Error fetching data: ' + err.message));
  }, []);

  const goBack = () => {
    navigate('/admin');
  };

  return (
    <div className="recruiters-container">
      <button className="back-button" onClick={goBack}>
        Go Back
      </button>
      <div className="recruiters-card">
        <h5 className="recruiters-title">Recruiters List</h5>
        <div className="recruiters-body">
          <table className="recruiters-table">
            <thead>
              <tr>
                <th>Unique Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User Name</th>
              </tr>
            </thead>
            <tbody>
              {recruitersList.map(recruiter => (
                <tr key={recruiter.id}>
                  <td>{recruiter.id}</td>
                  <td>{recruiter.firstName}</td>
                  <td>{recruiter.lastName}</td>
                  <td>{recruiter.userName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Recruiters;
