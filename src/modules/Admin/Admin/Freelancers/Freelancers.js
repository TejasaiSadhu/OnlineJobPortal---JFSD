import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listAll } from '../../../../services/FreelancerService';
import './Freelancers.css';

const Freelancers = () => {
  const [freelancersList, setFreelancersList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    listAll()
      .then(data => setFreelancersList(data))
      .catch(err => alert('Error fetching data: ' + err.message));
  }, []);

  const goBack = () => {
    navigate('/admin');
  };

  const handleRowClick = (id) => {
    setSelectedId(id);
    // Add animation or additional actions here
  };

  return (
    <div className="freelancers-container">
      <button className="btn btn-outline-danger back-button" onClick={goBack}>
        Go Back
      </button>
      <div className="freelancers-card">
        <h5 className="freelancers-title"><b>Freelancers List</b></h5>
        <div className="freelancers-body">
          <table className="freelancers-table">
            <thead>
              <tr>
                <th>Unique Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User Name</th>
              </tr>
            </thead>
            <tbody>
              {freelancersList.map(freelancer => (
                <tr
                  key={freelancer.id}
                  onClick={() => handleRowClick(freelancer.id)}
                  className={selectedId === freelancer.id ? 'active-row' : ''}
                >
                  <td>{freelancer.id}</td>
                  <td>{freelancer.firstName}</td>
                  <td>{freelancer.lastName}</td>
                  <td>{freelancer.userName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Freelancers;
