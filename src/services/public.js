import axios from 'axios';

const baseUrl = 'https://lumiere.my.id/api/public';

const getAllHome = async () => {
  const request = await axios.get(`${baseUrl}/home/all_home`);
  return request.data;
};

const getHomeByQuery = async (searchKey) => {
  const request = await axios.get(
    `${baseUrl}/home/get_home_query?ukm=${searchKey}`,
  );
  return request.data;
};

export default { getAllHome, getHomeByQuery };
