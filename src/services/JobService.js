import axios from 'axios';

// Base URL for the job-related API
const baseUrl = 'http://localhost:8080/job';

// Helper function to create headers for API requests
const createHeaders = () => ({
  'Content-Type': 'application/json; charset=utf-8'
});

// Add a new job
export const addJob = async (job) => {
  try {
    const response = await axios.post(`${baseUrl}/postJob`, job, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error adding job:', error);
    throw error;
  }
};

// Find jobs by skill name
export const findJobsBySkill = async (skillName) => {
  try {
    const response = await axios.get(`${baseUrl}/findJobsBySkill/${skillName}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error finding jobs by skill:', error);
    throw error;
  }
};

// Find a job by its ID
export const findJobById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/findById/${id}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error finding job by ID:', error);
    throw error;
  }
};

// Close a job by its ID
export const closeJob = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/close/${id}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error closing job:', error);
    throw error;
  }
};

// Get all jobs
export const getAllJobs = async () => {
  try {
    const response = await axios.get(`${baseUrl}/findAll`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error fetching all jobs:', error);
    throw error;
  }
};

// Award a job to a freelancer
export const awardJob = async (jobId, freelancerId) => {
  try {
    const response = await axios.put(`${baseUrl}/awardJob/${jobId}/${freelancerId}`, null, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error awarding job:', error);
    throw error;
  }
};

// Get all active jobs
export const getAllActive = async () => {
  try {
    const response = await axios.get(`${baseUrl}/getAllActive`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error fetching all active jobs:', error);
    throw error;
  }
};

// Job class for TypeScript (if using)
export class Job {
  constructor(freelancerId, skillId, recruiterId, jobTitle, jobDescription) {
    this.freelancerId = freelancerId;
    this.skillId = skillId;
    this.recruiterId = recruiterId;
    this.jobTitle = jobTitle;
    this.jobDescription = jobDescription;
  }
}
