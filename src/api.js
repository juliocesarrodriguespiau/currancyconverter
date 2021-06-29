const axios = require("axios");

const api = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/22f19facf5e1bfd105a6e2f4/pair"
});

module.exports = api;