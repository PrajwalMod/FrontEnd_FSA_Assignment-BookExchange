import axios from 'axios';

const API_URL = 'http://your-api-url/api/v1/users';

const register = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;  // Depending on what your API returns
  } catch (error) {
    throw error.response.data;  // You might want to handle this differently
  }
}

export default {
  register
};