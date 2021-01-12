import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID ndK2E3PPMV2RpWdG2h30aNbDi4ETkghSY5nmVLE5YPE',
  },
});
