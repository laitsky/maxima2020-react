import axios from 'axios';

const baseUrl = 'http://localhost:3005/api/user';

const token = window.sessionStorage.getItem('token');
const config = {
  headers: {
    'x-access-token': token,
  },
};

const getCredential = async (nim) => {
  const request = await axios.post(
    `${baseUrl}/get_credentials`,
    nim,
    config,
  );
  return request.data;
};

const updatePassword = async (data) => {
  const request = await axios.post(
    `${baseUrl}/update_password`,
    data,
    config,
  );
  return request.data;
};

const createOTP = async (nim) => {
  const request = await axios.post(
    `${baseUrl}/create_otp_reset_pass`,
    nim,
  );
  return request.data;
};

const resetPassword = async (data) => {
  const request = await axios.post(`${baseUrl}/resetPassword`, data);
  return request.data;
};

export default {
  getCredential,
  updatePassword,
  createOTP,
  resetPassword,
};
