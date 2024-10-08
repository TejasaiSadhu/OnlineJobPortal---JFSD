// src/services/BookmarkedFreelancerService.js
import axios from 'axios';

const baseUrl = 'http://localhost:8080/bmark/freelancer';

// Helper function to create headers
const createHeaders = () => ({
  'Content-Type': 'application/json; charset=utf-8'
});

// Add bookmark freelancer
export const addBookmarkFreelancer = async (bMark) => {
  try {
    const response = await axios.post(`${baseUrl}/add`, bMark, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Delete bookmark freelancer
export const deleteBookmarkFreelancer = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/delete/${id}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get bookmarked freelancer by ID
export const getBookmarkedFreelancerById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/get/id/${id}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get all bookmarked freelancers
export const getAllBookmarks = async () => {
  try {
    const response = await axios.get(`${baseUrl}/getAll`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
