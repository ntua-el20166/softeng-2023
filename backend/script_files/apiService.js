const axios = require("axios");

const url = "https://api.themoviedb.org/3";

async function fetchData(endpoint, params = {}) {
  try {
    params.api_key = "f98bafc1f4c7d1e56519e6d382d1774f";
    const response = await axios.get(`${url}${endpoint}`, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = { fetchData };
