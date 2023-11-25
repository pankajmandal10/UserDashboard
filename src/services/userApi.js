import axios from 'axios';

const BASE_URL = 'https://api-shield.rukkor.dev';

const userApi = axios.create({
  baseURL: BASE_URL,
});

const loginApi = async credentials => {
  try {
    const response = await userApi.post('/api/users/login', credentials);
    console.warn('response.data', response.data);
    if (response.data.message.includes('Invali')) {
      console.log('wrong');
    } else {
      return response.data;
    }
  } catch (error) {
    console.warn('er throug', error);
    throw error;
  }
};

const register = async userData => {
  try {
    const response = await userApi.post('/api/users/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
const confirmPassword = async passwordData => {
  try {
    const response = await userApi.post('/api/users/register', passwordData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getUserProfileMethod = async (token, userId) => {
  try {
    const response = await userApi.get(
      `/api/users/get_user_profile?user_id=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateProfileApi = async (token, profileData) => {
  try {
    const response = await userApi.post(
      '/api/users/update_profile',
      profileData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  loginApi,
  register,
  confirmPassword,
  getUserProfileMethod,
  updateProfileApi,
};
