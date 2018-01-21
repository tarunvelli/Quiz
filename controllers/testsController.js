var testsModel = require('../models/testsModel.js');

/**
 * testsController.js
 *
 * @description :: Server-side logic for managing testss.
 */
module.exports = {

    /**
     * testsController.list()
     */
    list: function (req, res) {
        testsModel.find(function (err, testss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting tests.',
                    error: err
                });
            }

            var title = 'Tests'
            var page = 'tests'

            if ( req.query.source === 'view' ) {
              title = 'Results of Test'
              page = 'results'
            } else if ( req.query.source === 'take' ) {
              title = 'Take Test'
            }

            return res.render(page, { title:title, test:testss });
        });
    },

    /**
     * testsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        testsModel.findOne({_id: id}, function (err, tests) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting tests.',
                    error: err
                });
            }
            if (!tests) {
                return res.status(404).json({
                    message: 'No such tests'
                });
            }
            return res.json(tests);
        });
    },

    /**
     * testsController.create()
     */
    create: function (req, res) {
        var tests = new testsModel({
			name : req.body.name

        });

        tests.save(function (err, tests) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating tests',
                    error: err
                });
            }
            return res.status(201).render('questions', { title: 'Add questions', test:tests });
        });
    },

    /**
     * testsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        testsModel.findOne({_id: id}, function (err, tests) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting tests',
                    error: err
                });
            }
            if (!tests) {
                return res.status(404).json({
                    message: 'No such tests'
                });
            }

            tests.name = req.body.name ? req.body.name : tests.name;

            tests.save(function (err, tests) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating tests.',
                        error: err
                    });
                }

                return res.json(tests);
            });
        });
    },

    /**
     * testsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        testsModel.findByIdAndRemove(id, function (err, tests) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the tests.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
