import axios from 'axios';

const baseUrl = 'http://localhost:8080/bmark/job';

// Helper function to create headers
const createHeaders = () => ({
  'Content-Type': 'application/json; charset=utf-8'
});

// Bookmark a job
export const createBookmark = async (bJob) => {
  try {
    console.log('Bookmark a job method');
    const response = await axios.post(`${baseUrl}/add`, bJob, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Delete bookmarked job by ID
export const deleteById = async (id) => {
  try {
    console.log('Delete Bookmarked Job By Id method');
    const response = await axios.delete(`${baseUrl}/delete/${id}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get bookmarked job by ID
export const getById = async (id) => {
  try {
    console.log('Get Bookmarked Job By Id method');
    const response = await axios.get(`${baseUrl}/get/id/${id}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get bookmarked jobs by skill
export const getBySkill = async (skillName) => {
  try {
    console.log('Get Bookmarked Jobs by Skill Name method');
    const response = await axios.get(`${baseUrl}/get/skill/${skillName}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get all bookmarked jobs for a freelancer
export const getAll = async (frId) => {
  try {
    console.log('Get Bookmarked Jobs method');
    const response = await axios.get(`${baseUrl}/findAll/${frId}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// BookmarkedJob class for TypeScript (if using)
export class BookmarkedJob {
  constructor(skillId, freelancerId, jobId) {
    this.skillId = skillId;
    this.freelancerId = freelancerId;
    this.jobId = jobId;
  }
}
