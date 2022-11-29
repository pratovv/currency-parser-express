const request = require("request-promise");
const convert = require("xml-js");
const BASE_URL = 'https://www.nbkr.kg/XML/weekly.xml';

class CurrencyService {


    async getAll() {
        const xml = (async () => {
            return await request({uri: BASE_URL})
        })()
        const response = xml.then((data) => convert.xml2json(data, {compact: true, spaces: 4}))
        return await response
    }

    async filter() {

    }
}

module.exports = new CurrencyService();