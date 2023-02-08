import axios from 'axios';

export const href = process.env.NODE_ENV === 'development' ? 'http://localhost:5001' : 'http://localhost:5001'

const getUrl = (url) => {
  return `${href}${url}`
}

export const postRequest = async (data) => {
  try {
    const urlPost = getUrl('/api/v1/login');
    const response = await axios.post(urlPost, data);
    return response.data
  } catch (error) {
    console.error('postRequest error', error);
    return error.response.data
  }
}
