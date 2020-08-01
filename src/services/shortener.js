import axios from 'axios';

const baseUrl = 'http://mxm.one/api/shorteners';

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};
const create = async (newUrl) => {
  const request = await axios.post(baseUrl, newUrl);
  return request.data;
};

export default { getAll, create };
