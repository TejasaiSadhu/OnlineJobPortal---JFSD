// src/services/SkillExperienceService.js
import axios from 'axios';

const baseUrl = 'http://localhost:8080/skillExperience';

// Helper function to create headers
const createHeaders = () => ({
  'Content-Type': 'application/json; charset=utf-8'
});

// Add skill experience
export const addExperience = async (skillExp) => {
  try {
    console.log('Add Skill Experience');
    const response = await axios.post(`${baseUrl}/add`, skillExp, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get experience by ID
export const getExperienceById = async (id) => {
  try {
    console.log('Get Experience by Id');
    const response = await axios.get(`${baseUrl}/get/id/${id}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Update skill experience
export const updateSkillExp = async (id, freelancerId, years) => {
  try {
    console.log('Update Experience');
    const response = await axios.put(`${baseUrl}/update/freelancer/${freelancerId}/skill/${id}?years=${years}`, null, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get all skills by freelancer
export const getAllSkills = async (id) => {
  try {
    console.log('Get All Skills By Freelancer Method');
    const response = await axios.get(`${baseUrl}/getAll/freelancer/${id}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get skills by freelancer (add this function)
export const getSkillsByFreelancer = async (id) => {
  try {
    console.log('Get Skills By Freelancer Method');
    const response = await axios.get(`${baseUrl}/getSkillsByFreelancer/${id}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// SkillExperience class for TypeScript (if using)
export class SkillExperience {
  constructor(years, skillId, freelancerId) {
    this.years = years;
    this.skillId = skillId;
    this.freelancerId = freelancerId;
  }
}
