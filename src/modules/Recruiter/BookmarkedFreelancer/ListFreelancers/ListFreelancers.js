import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FreelancerService from '../../../../services/FreelancerService';

const ListFreelancers = () => {
  const navigate = useNavigate();
  const [freelancersList, setFreelancersList] = useState([]);

  useEffect(() => {
    const fetchFreelancers = async () => {
      try {
        const response = await FreelancerService.listAll();
        setFreelancersList(response);
      } catch (error) {
        console.error('Error fetching freelancers:', error);
        alert('An error occurred');
      }
    };

    fetchFreelancers();
  }, []);

  const handleAddBookmark = (freelancerId) => {
    navigate(`addBookmark/${freelancerId}`);
  };
  
  return (
    <div className="container-fluid">
      <h3 className="text-center">Freelancers List</h3>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 card">
          <table className="table table-striped table-hover table-warning text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {freelancersList.map(freelancer => (
                <tr key={freelancer.id}>
                  <td>{freelancer.id}</td>
                  <td>{freelancer.firstName}</td>
                  <td>{freelancer.lastName}</td>
                  <td>{freelancer.userName}</td>
                  <td>
                    <button className="btn btn-success" onClick={() => handleAddBookmark(freelancer.id)}>
                      Add Bookmark
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

export default ListFreelancers;
