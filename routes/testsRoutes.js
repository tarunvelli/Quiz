var express = require('express');
var router = express.Router();
var testsController = require('../controllers/testsController.js');

/*
 * GET
 */
router.get('/', testsController.list);

/*
 * GET
 */
router.get('/:id', testsController.show);

/*
 * POST
 */
router.post('/', testsController.create);

/*
 * PUT
 */
router.put('/:id', testsController.update);

/*
 * DELETE
 */
router.delete('/:id', testsController.remove);

module.exports = router;
