import axios from 'axios';

const baseUrl = 'https://lumiere.my.id/api/ukm/state';

const token = window.sessionStorage.getItem('token');
const config = {
  headers: {
    'x-access-token': token,
  },
};

// state yang bisa di-view
const viewState = async (nim) => {
  const request = await axios.post(
    `${baseUrl}/view_state`,
    { nim },
    config,
  );
  return request.data;
};

const getStateDetails = async (stateId) => {
  const request = await axios.post(
    `${baseUrl}/get_state_details`,
    { state_id: stateId },
    config,
  );
  return request.data;
};

const viewRegistered = async (stateId) => {
  const request = await axios.post(
    `${baseUrl}/view_registered`,
    { state_id: stateId },
    config,
  );
  return request.data;
};
export default { viewState, getStateDetails, viewRegistered };
