const { fetchData, getApiInfo } = require("./apiService.js");
const { csvformat } = require("./csvformat.js");

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
  const { format } = req.query ?? "json";
  const apiStatus = (await checkApiConnection()) ? "OK" : "failed";
  const apiInfo = getApiInfo();

  const responseData = {
    status: apiStatus,
    dataconnection: { url: apiInfo.baseUrl, key: apiInfo.apiKey },
  };

  if (format === "csv") {
    csvformat(responseData, res);
  } else {
    res.status(200).json(responseData);
  }
}

module.exports = { getHealthCheck };
