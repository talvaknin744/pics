import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unspash.com',
    headers: {
        Authorization: "Client-ID sdfsdffd",
      },
});