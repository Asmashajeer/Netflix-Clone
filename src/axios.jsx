import axios from 'axios'
import { baseUrl,API_KEY } from './constants/constants';

const axiosInstance = axios.create({
  baseURL: baseUrl, 
  params: {
    api_key: API_KEY
  },
});
export default axiosInstance