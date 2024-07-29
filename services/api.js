// services/api.js
import axios from 'axios';

const API_URL = 'https://your-api-url.com';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/your-endpoint`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};
