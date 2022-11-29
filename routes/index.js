const Router = require('express').Router;
const currencyController = require('../controllers/currency-controller')
const router = new Router();
/**
 *  @swagger
 *  /api/getAll:
 *    get:
 *      summary: Lists all currency
 *      tags: [Currency]
 *      responses:
 *        200:
 *          description: The list of all currency.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 */
router.get('/getAll', currencyController.getAll)
/**
 *  @swagger
 *  /filter:
 *    post:
 *      summary: You can filter
 *      tags: [Currency]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        200:
 *          description: Filtered currency
 *          content:
 *            application/json:
 *              schema:
 *        500:
 *          description: Server error
 */
router.post('/filter', currencyController.PostWithFilter)

module.exports = router