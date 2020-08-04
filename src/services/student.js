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

export default { getAllState };
