import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './FindBookmarkFreelancerById.css';

const FindBookmarkFreelancerById = () => {
  const { id } = useParams();
  const [bookmarkedFreelancer, setBookmarkedFreelancer] = useState({
    id: 0,
    userName: '',
    name: '',
    skillName: [],
    skillExp: [],
  });
  const [frExistsById, setFrExistsById] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/freelancer/${id}`)
      .then(response => {
        const data = response.data;
        setFrExistsById(true);
        setBookmarkedFreelancer({
          id: data.id,
          name: `${data.firstName} ${data.lastName}`,
          userName: data.userName,
          skillName: data.skills.map(skill => skill.name),
          skillExp: data.skills.map(skill => skill.experience),
        });
      })
      .catch(error => {
        setFrExistsById(false);
        alert(error.response?.data || 'An error occurred');
      });
  }, [id]);

  return (
    <div className="text-center">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="card">
            <h5 className="card-title">Bookmarked Freelancer Details</h5>
            <div className="card-body">
              <table className="table table-hover table-primary table-responsive">
                <thead>
                  <tr>
                    <th>Freelancer Name</th>
                    <th>Freelancer UserId</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{bookmarkedFreelancer.name}</td>
                    <td>{bookmarkedFreelancer.userName}</td>
                  </tr>
                </tbody>
              </table>
              <h5>Skills</h5>
              <table className="table table-warning table-bordered border-danger table-hover table-sm table-responsive">
                <thead>
                  <tr>
                    <th>Skill</th>
                    <th>Experience (in Years)</th>
                  </tr>
                </thead>
                <tbody>
                  {bookmarkedFreelancer.skillName.map((name, index) => (
                    <tr key={index}>
                      <td>{name}</td>
                      <td>{bookmarkedFreelancer.skillExp[index]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default FindBookmarkFreelancerById;
