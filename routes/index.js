const Router = require('express').Router;
const currencyController = require('../controllers/currency-controller')
const router = new Router();

/**
 *  @swagger
 *  components:
 *    schemas:
 *      filterArray:
 *        type: object
 *        required:
 *          - filterArray
 *        properties:
 *          filterArray:
 *            type: array
 *              items:string
 *        example:
 *           {"filterArray":["GBP","DKK"]}
 */

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
 *  /api/filter:
 *    post:
 *      summary: Filter currency
 *      tags: [Currency]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/filterArray'
 *      responses:
 *        200:
 *          description: The list of filtered currency.
 */
router.post('/filter', currencyController.PostWithFilter)

module.exports = router