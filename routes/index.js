var express = require('express');
var router = express.Router();
var flyerDataService = require('../flyerDataService');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Meal Planner'});
});

/* GET specials. */
router.get('/specials', function (req, res, next) {

    var flyerData = flyerDataService.getFlyerData(function (items) {
        console.log("calbback items invokeed" + items);
        res.render('specials', {
            title: 'Yay, Here are your sale items!',
            flyerData: items
        });
    });
});

module.exports = router;
