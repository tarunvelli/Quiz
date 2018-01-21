var resultsModel = require('../models/resultsModel.js');

/**
 * resultsController.js
 *
 * @description :: Server-side logic for managing resultss.
 */
module.exports = {

    /**
     * resultsController.list()
     */

    list: function (req, res) {
        var title = "Test Results"
        var searchParams = {}
        if(req.query && req.query.test_id) {
          searchParams.test_id = req.query.test_id
        }
        if(req.query && req.query.name) {
          title = req.query.name
        }
        resultsModel.find(searchParams, function (err, resultss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting results.',
                    error: err
                });
            }
            return res.status(200).render('result_list', { title:title, results:resultss })
        }).sort( { score: -1 } );
    },

    /**
     * resultsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        resultsModel.findOne({_id: id}, function (err, results) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting results.',
                    error: err
                });
            }
            if (!results) {
                return res.status(404).json({
                    message: 'No such results'
                });
            }
            return res.json(results);
        });
    },

    /**
     * resultsController.create()
     */
    create: function (req, res) {

      var score = 0
      var body = req.body
      Object.keys(body).forEach( key => {

        if(body[key] instanceof Array && body[key].length===2 && body[key][0] === body[key][1] ){
          score++
        }

      } )

      var results = new resultsModel({
        name : req.body.name,
        roll_no : req.body.roll_no,
        stream : req.body.stream,
        college : req.body.college,
        score : score,
        test_id : req.body.test_id
      });

      results.save(function (err, results) {
        if (err) {
          return res.status(500).json({
            message: 'Error when creating results',
            error: err
          });
        }
        return res.status(201).render('index', { title:"Done!", index:true })
      });

    },

    /**
     * resultsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        resultsModel.findOne({_id: id}, function (err, results) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting results',
                    error: err
                });
            }
            if (!results) {
                return res.status(404).json({
                    message: 'No such results'
                });
            }

      results.name = req.body.name ? req.body.name : results.name;
			results.roll_no = req.body.roll_no ? req.body.roll_no : results.roll_no;
			results.stream = req.body.stream ? req.body.stream : results.stream;
			results.college = req.body.college ? req.body.college : results.college;
			results.score = req.body.score ? req.body.score : results.score;
			results.test_id = req.body.test_id ? req.body.test_id : results.test_id;

            results.save(function (err, results) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating results.',
                        error: err
                    });
                }

                return res.json(results);
            });
        });
    },

    /**
     * resultsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        resultsModel.findByIdAndRemove(id, function (err, results) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the results.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
