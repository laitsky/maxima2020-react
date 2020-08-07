import axios from 'axios';

const baseUrl = 'https://lumiere.my.id/api/public';

const getAllHome = async () => {
  const request = await axios.get(`${baseUrl}/home/all_home`);
  return request.data;
};

export default { getAllHome };
