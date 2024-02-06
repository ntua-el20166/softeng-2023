const { fetchData, getApiInfo } = require("./apiService.js");

async function checkApiConnection() {
  try {
    await fetchData("");
    return true;
  } catch (error) {
    console.error("API connection failed:", error);
    return false;
  }
}

async function getHealthCheck(req, res) {
  const apiStatus = (await checkApiConnection()) ? "OK" : "failed";
  const apiInfo = getApiInfo();

  const responseData = {
    status: apiStatus,
    dataconnection: { url: apiInfo.baseUrl, key: apiInfo.apiKey },
  };

  res.json(responseData);
}

module.exports = { getHealthCheck };
