const currencyService = require('../services/currency-service')

class CurrencyController {

    async getAll(req, res, next) {
        try {
            const data = await currencyService.getAll();
            return res.send(data);
        } catch (e) {
            next(e)
        }
    }


    async PostWithFilter(req, res, next) {
        try {
            const {filterArray} = req.body
            const data = await currencyService.filter(filterArray)
            return res.json(data);
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new CurrencyController()