const currencyService = require('../services/currency-service')

class CurrencyController {

    async getAll(req, res) {
        try {
            const data = await currencyService.getAll();
            return res.send(data);
        } catch (e) {
            console.log(e)
            res.send(e)
        }
    }


    async PostWithFilter(req, res) {
        try {
            const data = await currencyService.filter()
            return res.json(data);
        } catch (e) {
            console.log(e)
            res.send(e)
        }
    }
}

module.exports = new CurrencyController()