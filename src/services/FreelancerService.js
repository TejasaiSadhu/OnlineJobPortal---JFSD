// src/services/FreelancerService.js
import axios from 'axios';

const baseUrl = 'http://localhost:8080/freelancer';

// Helper function to create headers
const createHeaders = () => ({
  'Content-Type': 'application/json; charset=utf-8'
});

// Add freelancer
export const addFreelancer = async (freelancer) => {
  try {
    const response = await axios.post(`${baseUrl}/add`, freelancer, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get freelancer by ID
export const getById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/get/id/${id}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get freelancer by username
export const getByUserName = async (userName) => {
  try {
    const response = await axios.get(`${baseUrl}/get/name/${userName}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Update freelancer details
export const updateFreelancer = async (id, freelancer) => {
  try {
    const response = await axios.put(`${baseUrl}/update/${id}`, freelancer, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// List all freelancers
export const listAll = async () => {
  try {
    const response = await axios.get(`${baseUrl}/listAll`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
