const api = require("./api");

class Convert {
  async converter(from, to, amount) {
    try {
      const resultAPI = await this.getAPI(from, to);

      const resultConvert = amount * resultAPI.conversion_rate;
      
      return resultConvert;
    } catch (error) {
      return { error: error.message };
    }
  }

  async getAPI(from, to) {
    try {
      const { data } = await api.get(`/${from}/${to}`);

      return data;
    } catch (error) {
      return { error: error.message };
    }
  }
}

module.exports = new Convert();
