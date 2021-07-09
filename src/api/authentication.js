import axios from 'axios';

export const loginUser = async (payload) => {
  return await axios.post('/login', payload);
};
