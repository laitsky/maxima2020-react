import axios from 'axios';

const baseUrl = 'http://localhost:3005/api/bph';

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

const viewRegisteredState = async (stateId) => {
  const request = await axios.post(
    `${baseUrl}/state/view_registered`,
    { state_id: stateId },
    config,
  );
  return request.data;
};

export default { getAllState, viewRegisteredState };
