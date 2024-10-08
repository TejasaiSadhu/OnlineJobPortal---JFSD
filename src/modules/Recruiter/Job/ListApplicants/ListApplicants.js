import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as JobService from '../../../../services/JobService';
import * as JobApplicationService from '../../../../services/JobApplicationService';
import './ListApplicants.css'; // Import the CSS file for styles

const ListApplicants = () => {
  const { jobId } = useParams();
  const [applicantsList, setApplicantsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await JobApplicationService.getAllApplicants(jobId);
        setApplicantsList(response);
      } catch (err) {
        alert(err.message);
      }
    };

    fetchApplicants();
  }, [jobId]);

  const awardJob = async (jobId, freelancerId) => {
    try {
      await JobService.awardJob(jobId, freelancerId);
      alert('Job Awarded successfully');
      navigate('../list');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="list-applicants-container">
      <h4 className="title">List of Job Applicants</h4>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>UserId</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applicantsList.map((applicant, index) => (
              <tr key={applicant.id}>
                <td>{index + 1}</td>
                <td>{applicant.freelancerName}</td>
                <td>{applicant.freelancerUName}</td>
                <td>
                  <button
                    className="btn award-btn"
                    onClick={() => awardJob(applicant.jobId, applicant.freelancerId)}
                  >
                    Award Job
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

export default ListApplicants;
