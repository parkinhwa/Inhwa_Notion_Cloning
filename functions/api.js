require("dotenv").config();
const axios = require("axios");
const { API_END_POINT, API_KEY } = process.env;

exports.handler = async function (event) {
  const options = JSON.parse(event.body);
  const { method, body, id } = options;
  const url = id ? `${id}` : "";
  const { data } = await axios({
    url: `${API_END_POINT}/documents/${url}`,
    headers: {
      "x-username": `${API_KEY}`,
      "Content-Type": "application/json",
    },
    method,
    data: body,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
