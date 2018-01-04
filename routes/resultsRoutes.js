var express = require('express');
var router = express.Router();
var resultsController = require('../controllers/resultsController.js');

/*
 * GET
 */
router.get('/', resultsController.list);

/*
 * GET
 */
router.get('/:id', resultsController.show);

/*
 * POST
 */
router.post('/', resultsController.create);

/*
 * PUT
 */
router.put('/:id', resultsController.update);

/*
 * DELETE
 */
router.delete('/:id', resultsController.remove);

module.exports = router;
