import axios from 'axios';

const baseUrl = 'https://lumiere.my.id/api/acara';

const token = window.sessionStorage.getItem('token');
const config = {
  headers: {
    'x-access-token': token,
  },
};

const getAllState = async () => {
  const request = await axios.get(
    `${baseUrl}/state/all_state_details`,
    config,
  );
  return request.data;
};

const getStateById = async (stateId) => {
  const request = await axios.post(
    `${baseUrl}/state/get_state_details`,
    { state_id: stateId },
    config,
  );
  return request.data;
};

const addState = async (data) => {
  const request = await axios.post(
    `${baseUrl}/state/add_state`,
    data,
    config,
  );
  return request.status;
};

const editState = async (data, stateId) => {
  const request = await axios.post(
    `${baseUrl}/state/edit_state`,
    { state_id: stateId, ...data },
    config,
  );
  return request.status;
};

const viewRegisteredState = async (stateId) => {
  const request = await axios.post(
    `${baseUrl}/state/view_registered`,
    { state_id: stateId },
    config,
  );
  return request.data;
};

export default {
  getAllState,
  getStateById,
  addState,
  editState,
  viewRegisteredState,
};
