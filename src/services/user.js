import axios from 'axios';

const baseUrl = 'https://lumiere.my.id/api/user';

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

export default { getCredential };
