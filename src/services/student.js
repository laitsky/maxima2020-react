import axios from 'axios';

const baseUrl = 'https://lumiere.my.id/api/student';

const token = window.sessionStorage.getItem('token');
const config = {
  headers: {
    'x-access-token': token,
  },
};

const getAllState = async () => {
  const request = await axios.get(
    `${baseUrl}/state/all_state`,
    config,
  );
  return request.data;
};

const registerState = async (data) => {
  const request = await axios.post(
    `${baseUrl}/state/register_state`,
    data,
    config,
  );
  return request.status;
};

const getRegisteredState = async (nim) => {
  const request = await axios.post(
    `${baseUrl}/state/registered_state`,
    { nim },
    config,
  );
  return request.data;
};

const cancelRegisteredState = async (data) => {
  const request = await axios.post(
    `${baseUrl}/state/deregister_state`,
    data,
    config,
  );
  return request.status;
};

const absenState = async (data) => {
  const request = await axios.post(
    `${baseUrl}/state/state_checkin`,
    data,
    config,
  );
  return request.data;
};

export default {
  getAllState,
  registerState,
  getRegisteredState,
  cancelRegisteredState,
  absenState,
};
