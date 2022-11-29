const request = require("request-promise");
const convert = require("xml-js");
const BASE_URL = 'https://www.nbkr.kg/XML/weekly.xml';
const ApiError = require('../exceptions/api-error');

class CurrencyService {
    async getAll() {
        // get xml from the URI and format the xml to json
        const xml = (async () => {
            return await request({uri: BASE_URL})
        })()
        const response = xml.then((data) => JSON.parse(convert.xml2json(data, {compact: true, spaces: 4})))
            .then(data => data['CurrencyRates']['Currency'])
        return await response
    }
    // make unique array than filter json by value in unique array
    async filter(filterArray) {
        if (!filterArray || filterArray.length === 0 || typeof (filterArray) !== 'object')
            throw ApiError.BadRequest(`Пожалуйста заполните json правильно 
            Пример: {"filterArray":["GBP","DKK"]}`)
        const response = []
        const set = new Set(filterArray)
        const uniqueArray = Array.from(set)
        const json = await this.getAll()
        json.map((e) => {
            uniqueArray.indexOf(e['_attributes']['ISOCode']) !== -1 ? response.push(e) : null;
        })
        return response
    }
}

module.exports = new CurrencyService();