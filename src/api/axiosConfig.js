import axios from 'axios';
import { Alert } from 'react-native';
import constants from '@constants';

const handleSuccessResponse = (response) => {
  return response;
};

const handleErrorResponse = (error) => {
  if (error.response?.status === 401) {
    Alert.alert(error.response.data?.error);
    // Add your logic to
    //  1. Redirect user to LOGIN
    //  2. Reset authentication from AsyncStorage
  } else if (error.response?.data?.errors) {
    error.response.data.errors.map((error) => {
      Alert.alert(error);
    });
  } else {
    Alert.alert(error.response?.data?.error || error.message);
  }
  return Promise.reject(error);
};

const registerResponseIntercept = () => {
  axios.interceptors.response.use(handleSuccessResponse, (error) => handleErrorResponse(error));
};

export const configureAxiosHeaders = (auth_token, email) => {
  axios.defaults.headers['auth-token'] = auth_token;
  axios.defaults.headers['auth-email'] = email;
  axios.defaults.headers.Cookie = '';
};

export const configureAxios = () => {
  axios.defaults.baseURL = `${constants.BASE_URL}`;
  registerResponseIntercept();
};
