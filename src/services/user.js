import axios from 'axios';

const baseUrl = 'https://mxm20-test.herokuapp.com/api/user';

const token = window.sessionStorage.getItem('token');
const getCredential = async (nim) => {
  const config = {
    headers: {
      'x-access-token': token,
    },
  };

  const request = await axios.post(
    `${baseUrl}/get_credentials`,
    nim,
    config,
  );
  return request.data;
};

export default { getCredential };
