const api = require ("./api");

class Convert { 
    async converter (from, to, amount){
          
        try {

            const resultAPI = await this.getAPI(from, to);

            const resultConvert = amount * resultAPI.conversion_rate;

            return resultConvert;

        } catch (error) {
            return {error: error.message}; 
        }
    }

    async getAPI (from, to){

        try {
            const {data} = await api.get(`/${from}/${to}`);

            return data;

        } catch (error) {
            return {error: error.message}; 
        }
    }
}

module.exports = new Convert();

/**
 * 
 * https://v6.exchangerate-api.com/v6/22f19facf5e1bfd105a6e2f4/pair/BRL/USD
 */
// {
//   "result": "success",
//   "documentation": "https://www.exchangerate-api.com/docs",
//   "terms_of_use": "https://www.exchangerate-api.com/terms",
//   "time_last_update_unix": 1624924802,
//   "time_last_update_utc": "Tue, 29 Jun 2021 00:00:02 +0000",
//   "time_next_update_unix": 1625011202,
//   "time_next_update_utc": "Wed, 30 Jun 2021 00:00:02 +0000",
//   "base_code": "BRL",
//   "target_code": "USD",
//   "conversion_rate": 0.2020
// }




// class { 1 usd * 4.91 = 4.91}

// class { 10 * 4.91 = 40.91}

// 	"base_code": "EUR",
// 	"target_code": "GBP",
// 	"conversion_rate": 0.8412,
// 	"conversion_result": 5.8884