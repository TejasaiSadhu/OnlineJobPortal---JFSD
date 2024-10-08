import axios from 'axios';

const baseUrl = 'http://localhost:8080/recruiter';

// Helper function to create headers
const createHeaders = () => ({
  'Content-Type': 'application/json; charset=utf-8'
});

// Add a new recruiter
export const addRecruiter = async (recruiter) => {
  try {
    console.log('Create new Recruiter');
    const response = await axios.post(`${baseUrl}/add`, recruiter, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get recruiter by ID
export const getById = async (id) => {
  try {
    console.log('Get Recruiter by Id');
    const response = await axios.get(`${baseUrl}/get/id/${id}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get recruiter by name
export const getByName = async (name) => {
  try {
    console.log('Get Recruiter by Name');
    const response = await axios.get(`${baseUrl}/get/name/${name}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Update recruiter details
export const updateRecruiter = async (id, recruiter) => {
  try {
    console.log('Update Recruiter');
    const response = await axios.put(`${baseUrl}/update/${id}`, recruiter, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Find all recruiters
export const findAll = async () => {
  try {
    console.log('Find all Recruiters');
    const response = await axios.get(`${baseUrl}/getAll`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Recruiter class for TypeScript (if using)
export class Recruiter {
  constructor(userName, firstName, lastName, password) {
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
  }
}
