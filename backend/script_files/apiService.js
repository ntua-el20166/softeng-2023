const axios = require("axios");

const url = "https://api.themoviedb.org/3";
const apiKey = "f98bafc1f4c7d1e56519e6d382d1774f";

async function fetchData(endpoint, params = {}) {
  try {
    params.api_key = apiKey;
    const response = await axios.get(`${url}${endpoint}`, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}

function getApiInfo() {
  return {
    baseUrl: url,
    apiKey: apiKey,
  };
}

module.exports = { fetchData, getApiInfo };
