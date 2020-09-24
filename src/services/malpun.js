import axios from 'axios';

const baseUrl = 'https://lumiere.my.id/api/malpun';

const mailService = async (email) => {
  const request = await axios.post(`${baseUrl}/email`, { email });
  return request.data;
};

export default { mailService };
