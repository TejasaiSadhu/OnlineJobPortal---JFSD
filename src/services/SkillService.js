import axios from 'axios';

const baseUrl = 'http://localhost:8080/skills';

// Helper function to create headers
const createHeaders = () => ({
  'Content-Type': 'application/json; charset=utf-8'
});

// Create a new skill
export const createSkill = async (skill) => {
  try {
    console.log('Create Skill Method');
    const response = await axios.post(`${baseUrl}/add`, skill, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get all skills
export const getAllSkills = async () => {
  try {
    console.log('Get All Skills');
    const response = await axios.get(`${baseUrl}/getAll`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Delete a skill by ID
export const deleteSkill = async (id) => {
  try {
    console.log('Delete Skill by Id');
    const response = await axios.delete(`${baseUrl}/remove/${id}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Update a skill by ID
export const updateSkill = async (id, skill) => {
  try {
    console.log('Update Skill');
    const response = await axios.put(`${baseUrl}/update/${id}`, skill, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Skill class for TypeScript (if using)
export class Skill {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}
