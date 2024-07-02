import axios from 'axios';

const API_URL = 'https://gorest.co.in/public/v2/users?access-token=33b6fb110d633578b736fd78b6dca76279a2822251d92da5000afd35cc5b11e3';

export const fetchUsers = async (email) => {
  try {
    const response = await axios.get(`${API_URL}&email=${email}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
