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

const addState = async (data) => {
  const request = await axios.post(
    `${baseUrl}/state/add_state`,
    data,
    config,
  );
  return request.data;
};

export default { getAllState, addState };
