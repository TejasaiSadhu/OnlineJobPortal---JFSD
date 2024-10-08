import axios from 'axios';

const baseUrl = 'http://localhost:8080/jobApplication';

// Helper function to create headers
const createHeaders = () => ({
  'Content-Type': 'application/json; charset=utf-8'
});

// Apply to job
export const applyToJob = async (jobApplication) => {
  try {
    const response = await axios.post(`${baseUrl}/apply`, jobApplication, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Find all applications
export const findAll = async () => {
  try {
    const response = await axios.get(`${baseUrl}/findAll`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Withdraw application
export const withdrawApplication = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/delete/${id}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Update application
export const updateApplication = async (id, jobApplication) => {
  try {
    const response = await axios.put(`${baseUrl}/update/${id}`, jobApplication, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get all applicants for a job
export const getAllApplicants = async (jobId) => {
  try {
    const response = await axios.get(`${baseUrl}/findAll/job/${jobId}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Find application by freelancer ID
export const findByFreelancerId = async (jobId, freelancerId) => {
  try {
    const response = await axios.get(`${baseUrl}/findByFrId/job/${jobId}/frId/${freelancerId}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// JobApplication class for TypeScript (if using)
export class JobApplication {
  constructor(jobId, coverLetter, freelancerId) {
    this.jobId = jobId;
    this.coverLetter = coverLetter;
    this.freelancerId = freelancerId;
  }
}
