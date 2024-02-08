async function csvformat(data, res) {
  var items = JSON.stringify(data);
  var replacer = function (key, value) {
    return value === null ? "" : value;
  };

  // Parse the JSON string to get an object
  var parsedItems = JSON.parse(items);

  const header = Object.keys(parsedItems);
  const csvContent = [
    header.join(","), // Header row
    header
      .map((fieldName) => JSON.stringify(parsedItems[fieldName], replacer))
      .join(","),
  ].join("\r\n");

  res.setHeader("Content-Type", "text/csv");
  res.status(200).send(csvContent);
}

module.exports = {
  csvformat,
};
