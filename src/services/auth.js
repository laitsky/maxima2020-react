import axios from 'axios';

const baseUrl = 'https://mxm20-test.herokuapp.com/api/auth';

const daftarMaba = async (dataMaba) => {
  const request = await axios.post(`${baseUrl}/signup`, dataMaba);
  return request.data;
};

const loginMaba = async (dataMaba) => {
  const request = await axios.post(`${baseUrl}/signin`, dataMaba);
  return request.data;
};

export default { daftarMaba, loginMaba };
