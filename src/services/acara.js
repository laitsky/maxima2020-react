import axios from 'axios';

const baseUrl = 'http://localhost:3005/api/acara';

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

const getAllHome = async () => {
  const request = axios.get(`${baseUrl}/home/all_home`, config);
  return request;
};

const addHome = async (data) => {
  const request = await axios.post(
    `${baseUrl}/home/add_home`,
    data,
    config,
  );
  return request.status;
};

const addHomeMedia = async (data) => {
  const request = await axios.post(
    `${baseUrl}/home/add_home_media`,
    data,
    config,
  );
  return request.data;
};

const editHome = async (data, homeId) => {
  const request = await axios.post(
    `${baseUrl}/home/update_home`,
    { home_id: homeId, ...data },
    config,
  );
  return request.status;
};

const getHomeById = async (homeId) => {
  const request = await axios.post(
    `${baseUrl}/home/get_home_details`,
    { home_id: homeId },
    config,
  );
  return request.data;
};

const getAllPICs = async () => {
  const request = await axios.get(
    `${baseUrl}/state/pic/all_pic`,
    config,
  );
  return request.data;
};

const getAllMaba = async () => {
  const request = await axios.get(`${baseUrl}/user/all_maba`, config);
  return request.data;
};

const getAllOrganisators = async () => {
  const request = await axios.get(
    `${baseUrl}/user/all_pic_ukm`,
    config,
  );
  return request.data;
};

const addPIC = async (data) => {
  const request = await axios.post(
    `${baseUrl}/state/pic/add_pic`,
    data,
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
  getAllHome,
  addHome,
  addHomeMedia,
  editHome,
  getHomeById,
  getAllOrganisators,
  getAllPICs,
  getAllMaba,
  addPIC,
};
