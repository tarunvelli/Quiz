var questionsModel = require('../models/questionsModel.js');

/**
 * questionsController.js
 *
 * @description :: Server-side logic for managing questionss.
 */
module.exports = {

    /**
     * questionsController.list()
     */
    list: function (req, res) {
        questionsModel.find(function (err, questionss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting questions.',
                    error: err
                });
            }
            return res.json(questionss);
        });
    },

    /**
     * questionsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        questionsModel.findOne({_id: id}, function (err, questions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting questions.',
                    error: err
                });
            }
            if (!questions) {
                return res.status(404).json({
                    message: 'No such questions'
                });
            }
            return res.json(questions);
        });
    },

    /**
     * questionsController.create()
     */
    create: function (req, res) {
        var questions = new questionsModel({
			question : req.body.question,
			1 : req.body['1'],
			2 : req.body['2'],
			3 : req.body['3'],
			4 : req.body['4'],
			correct : req.body.correct,
			test_id : req.body.test_id

        });

        questions.save(function (err, questions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating questions',
                    error: err
                });
            }
            return res.status(201).json(questions);
        });
    },

    /**
     * questionsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        questionsModel.findOne({_id: id}, function (err, questions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting questions',
                    error: err
                });
            }
            if (!questions) {
                return res.status(404).json({
                    message: 'No such questions'
                });
            }

            questions.question = req.body.question ? req.body.question : questions.question;
			questions['1'] = req.body['1'] ? req.body['1'] : questions['1'];
			questions['2'] = req.body['2'] ? req.body['2'] : questions['2'];
			questions['3'] = req.body['3'] ? req.body['3'] : questions['3'];
			questions['4'] = req.body['4'] ? req.body['4'] : questions['4'];
			questions.correct = req.body.correct ? req.body.correct : questions.correct;
			questions.test_id = req.body.test_id ? req.body.test_id : questions.test_id;

            questions.save(function (err, questions) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating questions.',
                        error: err
                    });
                }

                return res.json(questions);
            });
        });
    },

    /**
     * questionsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        questionsModel.findByIdAndRemove(id, function (err, questions) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the questions.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
