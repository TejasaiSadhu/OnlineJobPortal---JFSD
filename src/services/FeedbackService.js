import axios from 'axios';

const baseUrl = 'http://localhost:8080/feedbacks';

// Helper function to create headers
const createHeaders = () => ({
  'Content-Type': 'application/json; charset=utf-8'
});

// Add feedback
export const addFeedback = async (feedback) => {
  try {
    console.log('Create New Feedback');
    console.log(feedback);
    const response = await axios.post(`${baseUrl}/add`, feedback, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get feedback for freelancer
export const getFeedbackForFreelancer = async (fId, rId) => {
  try {
    console.log('Get Feedbacks for Freelancer');
    const response = await axios.get(`${baseUrl}/get/freelancer/${fId}/recruiter/${rId}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get average ratings
export const getAverageRatings = async (id) => {
  try {
    console.log('Get Average Ratings for Freelancer');
    const response = await axios.get(`${baseUrl}/get/avgRatingsFor/${id}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Feedback class for TypeScript (if using)
export class Feedback {
  constructor(ranges, comments, recruiterUName, freelancerUName) {
    this.ranges = ranges;
    this.comments = comments;
    this.recruiterUName = recruiterUName;
    this.freelancerUName = freelancerUName;
  }
}
