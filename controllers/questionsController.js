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

       var reqArray = []

       req.body.question.forEach( (q,i) => {
         var parsed = {}
         parsed.question = q
         parsed.one = req.body.one[i]
         parsed.two = req.body.two[i]
         parsed.three = req.body.three[i]
         parsed.four = req.body.four[i]
         parsed.correct = req.body[`correct[${i}]`]
         parsed.test_id = req.body.test_id
         reqArray.push(parsed)
       } )

       questionsModel.insertMany( reqArray, function (err, questions) {
         if (err) {
           return res.status(500).json({
             message: 'Error when creating questions',
             error: err
           });
         }
       });
       return res.status(201).json(reqArray);

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
			questions.one = req.body.one ? req.body.one : questions.one;
			questions.two = req.body.two ? req.body.two : questions.two;
			questions.three = req.body.three ? req.body.three : questions.three;
			questions.four = req.body.four ? req.body.four : questions.four;
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
