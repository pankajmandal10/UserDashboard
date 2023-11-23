import {createSlice} from '@reduxjs/toolkit';
import {
  confirmPassword,
  getUserProfileMethod,
  loginApi,
  register,
} from '../services/userApi';

const initialState = {
  user: null,
  userId: null,
  token: null,
  userProfile: null,
  isAuthenticated: false,
  loginError: null,

  confirmPasswordLoading: false,
  confirmPasswordError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loginError = null;
    },
    loginSuccess(state, action) {
      state.user = action.payload.user;
      state.userId = action.payload.user.id;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loginError = null;
    },
    loginFailure(state, action) {
      state.loginError = action.payload.error;
    },
    confirmPasswordStart(state) {
      state.confirmPasswordLoading = true;
      state.confirmPasswordError = null;
    },
    confirmPasswordSuccess(state) {
      state.confirmPasswordLoading = false;
      state.confirmPasswordError = null;
    },
    confirmPasswordFailure(state, action) {
      state.confirmPasswordLoading = false;
      state.confirmPasswordError = action.payload.error;
    },

    getUserProfileStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getUserProfileSuccess(state, action) {
      state.isLoading = false;
    },
    getUserProfileFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setUserProfile(state, action) {
      state.userProfile = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  getUserProfileStart,
  getUserProfileSuccess,
  getUserProfileFailure,
  setUserProfile,
  confirmPasswordFailure,
  confirmPasswordStart,
  confirmPasswordSuccess,
} = authSlice.actions;
export const loginUser = credentials => async dispatch => {
  try {
    dispatch(loginStart());
    const response = await loginApi(credentials);
    console.warn('logged res', response);
    const {jwt_token: token, info: user} = response;

    dispatch(loginSuccess({token, user}));
  } catch (error) {
    console.error('Login error', error);
    dispatch(loginFailure(error.message || 'Login failed'));
    throw error;
  }
};

export const registerUser = userData => async dispatch => {
  try {
    dispatch(confirmPasswordStart());
    const response = await register(userData);

    const {status, message} = response;

    if (status === 1) {
      dispatch(confirmPasswordSuccess());
      console.log('Password confirmed successfully');
    } else {
      dispatch(
        confirmPasswordFailure(message || 'Password confirmation failed'),
      );
      console.error(
        'Password confirmation error:',
        message || 'Password confirmation failed',
      );
    }
  } catch (error) {
    console.error(
      'Password confirmation error:',
      error.message || 'Password confirmation failed',
    );
    dispatch(
      confirmPasswordFailure(error.message || 'Password confirmation failed'),
    );
  }
};

export const getUserProfiles = (token, userId) => async dispatch => {
  try {
    const userData = await getUserProfileMethod(token, userId);
    console.warn('u deta', userData);
    dispatch(getUserProfileSuccess(userData));
    dispatch(setUserProfile(userData));
  } catch (error) {
    dispatch(
      getUserProfileFailure(error.message || 'Failed to fetch user profile'),
    );
  }
};

export default authSlice.reducer;
