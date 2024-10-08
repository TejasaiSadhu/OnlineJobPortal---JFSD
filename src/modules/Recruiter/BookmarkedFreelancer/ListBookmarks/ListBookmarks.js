import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as BookmarkedFreelancerService from '../../../../services/BookmarkedFreelancerService'; // Update import path if needed

const ListBookmarks = () => {
  const [bookmarksList, setBookmarksList] = useState([]);
  const [recruiterName, setRecruiterName] = useState('');
  const recruiterId = localStorage.getItem('recruiterId');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecruiterDetails = async () => {
      try {
        // Use BookmarkedFreelancerService to fetch recruiter details if available
        // For now, we'll just fetch it via a placeholder axios call
        const response = await BookmarkedFreelancerService.getBookmarkedFreelancerById(recruiterId);
        setRecruiterName(response.userName);
        localStorage.setItem('recruiterUName', response.userName);
      } catch (error) {
        alert(error.response?.data || 'An error occurred');
      }
    };

    const fetchBookmarks = async () => {
      try {
        const response = await BookmarkedFreelancerService.getAllBookmarks();
        setBookmarksList(response);
      } catch (error) {
        alert(error.response?.data || 'An error occurred');
      }
    };

    fetchRecruiterDetails();
    fetchBookmarks();
  }, [recruiterId]);

  const manageFeedbacks = (freelancerUName) => {
    navigate(`/feedbacks/${freelancerUName}`);
  };

  return (
    <div className="container-fluid">
      <h5 className="text-center">List of Bookmarks by {recruiterName}</h5>
      <table className="table table-striped table-primary text-center table-responsive">
        <thead>
          <tr>
            <th>Bookmark Id</th>
            <th>Freelancer Name</th>
            <th>Freelancer UserName</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookmarksList.map((fr) => (
            <tr key={fr.id}>
              <td>{fr.id}</td>
              <td>{fr.freelancerName}</td>
              <td>{fr.freelancerUName}</td>
              <td>
                <button className="btn btn-warning" onClick={() => manageFeedbacks(fr.freelancerUName)}>
                  Manage Feedbacks
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListBookmarks;
