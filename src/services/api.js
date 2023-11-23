import axios from 'axios';

const BASE_URL = 'https://api-shield.rukkor.dev';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userApi = {
  register: userData => api.post('/api/users/register', userData),
  login: loginData => api.post('/api/users/login', loginData),
  updateProfile: (token, profileData) =>
    api.post('/api/users/update_profile', profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getUserProfile: (token, userId) =>
    api.get(`/api/users/get_user_profile?user_id=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  logOut: (token, deviceId) =>
    api.post(
      '/api/users/log_out',
      {device_id: deviceId},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    ),
  getCountry: token =>
    api.get('/api/users/get_country', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export default api;
