import axios from 'axios';

const baseUrl = 'http://localhost:3005/api/malpun';

const mailService = async (email) => {
  const request = await axios.post(`${baseUrl}/email`, { email });
  return request.data;
};

export default { mailService };
