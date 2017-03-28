var express = require('express');
var router = express.Router();
var flyerDataService = require('../flyerDataService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meal Planner' });
});

/* GET specials. */
router.get('/specials', function(req, res, next) {
    var flyerData = flyerDataService.getFlyerData();
    // console.log(flyerData);
//TODO: START HERE: FLYER DATA IS UNDEFINED!!!
    res.render('specials', {
        title: 'Yay, specials route!',
        flyerData: flyerData
    });
});

module.exports = router;
