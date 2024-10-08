import axios from 'axios';

const baseUrl = 'http://localhost:8080/admin';

// Helper function to create headers
const createHeaders = () => ({
  'Content-Type': 'application/json; charset=utf-8'
});

// Get admin by ID
export const findById = async (id) => {
  try {
    console.log('Find Admin by ID method');
    const response = await axios.get(`${baseUrl}/find/id/${id}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get admin by name
export const findByName = async (name) => {
  try {
    console.log('Find Admin by userName method');
    const response = await axios.get(`${baseUrl}/find/name/${name}`, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Add admin
export const addAdmin = async (admin) => {
  try {
    console.log('Add Admin Method');
    const response = await axios.post(`${baseUrl}/save`, admin, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Update admin
export const updateAdmin = async (id, admin) => {
  try {
    console.log('Update Admin Method');
    const response = await axios.put(`${baseUrl}/update/${id}`, admin, { headers: createHeaders() });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Admin class for TypeScript (if using)
export class Admin {
  constructor(userName, firstName, lastName, password) {
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
  }
}
