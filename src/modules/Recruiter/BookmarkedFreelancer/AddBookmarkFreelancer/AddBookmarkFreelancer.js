import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as BookmarkedFreelancerService from '../../../../services/BookmarkedFreelancerService';
import * as FreelancerService from '../../../../services/FreelancerService';

const AddBookmarkFreelancer = () => {
  const { id } = useParams(); // Get freelancer ID from route parameters
  const navigate = useNavigate();
  const [freelancer, setFreelancer] = useState(null);

  useEffect(() => {
    // Fetch freelancer details based on ID from the URL
    const fetchFreelancer = async () => {
      try {
        const response = await FreelancerService.getById(id);
        setFreelancer(response);
      } catch (error) {
        console.error('Error fetching freelancer:', error);
        alert('Failed to fetch freelancer details.');
      }
    };

    fetchFreelancer();
  }, [id]);

  const handleAddBookmark = async () => {
    if (freelancer) {
      try {
        // Add bookmark logic
        await BookmarkedFreelancerService.addBookmarkFreelancer({ freelancerId: freelancer.id });
        navigate('/listBookmarks');
      } catch (error) {
        console.error('Error adding bookmark:', error);
        alert('Failed to add bookmark.');
      }
    } else {
      alert('Freelancer not found.');
    }
  };

  if (!freelancer) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>Add Bookmark Freelancer</h1>
      <div className="form-group">
        <label htmlFor="freelancerName">Freelancer Name</label>
        <input
          type="text"
          id="freelancerName"
          className="form-control"
          value={`${freelancer.firstName} ${freelancer.lastName}`}
          readOnly
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddBookmark}>Add Bookmark</button>
    </div>
  );
};

export default AddBookmarkFreelancer;
