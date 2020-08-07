import axios from 'axios';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response.status === 401 &&
      window.location.pathname !== '/login'
    ) {
      window.sessionStorage.clear();
      window.location.href = '/401';
    }
    if (error.response.status === 403) {
      window.sessionStorage.clear();
      window.location.href = '/403';
    }
    return Promise.reject(error);
  },
);

export default axios;
