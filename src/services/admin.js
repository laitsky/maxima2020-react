import axios from 'axios';

const baseUrl = 'https://lumiere.my.id/api/admin';

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
  return request.data;
};

const editState = async (data, stateId) => {
  const request = await axios.post(
    `${baseUrl}/state/edit_state`,
    { state_id: stateId, ...data },
    config,
  );
  return request.status;
};
export default { getAllState, getStateById, addState, editState };
