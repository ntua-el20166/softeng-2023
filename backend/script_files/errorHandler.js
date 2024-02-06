const errorHandler = (error, res) => {
  if (error.response) {
    const statusCode = error.response.status;

    if (statusCode === 204) {
      res.status(204).send("No data");
    } else if (statusCode === 400) {
      res.status(400).send("Bad request");
    } else if (statusCode === 404) {
      res.status(404).send("Not available");
    } else {
      res.status(500).send("Internal server error");
    }
  } else if (error.request) {
    console.error("No response received from server");
    res.status(500).send("Internal Server Error");
  } else {
    console.error("Error setting up the request:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

const checkResultEmpty = (to_send) => {
  if (to_send?.length === 0) {
    const error = new Error("No data");
    error.response = { status: 204 };
    throw error;
  }
};

module.exports = { errorHandler, checkResultEmpty };
