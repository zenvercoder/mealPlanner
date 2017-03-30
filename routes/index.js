var express = require('express');
var router = express.Router();

var flyerDataService = require('../flyerDataService');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Meal Planner'});
});

/* GET specials. */
router.get('/specials', function (req, res, next) {

    // var storeid = req.params.value();

    var flyerData = flyerDataService.getFlyerData(function (items) {
        console.log("callback items invoked" + items);
        res.render('specials', {
            title: 'Yay, Here are your sale items!',
            flyerData: items
        });
    });

});

router.get('/stores', function (req, res, next) {
    var storesList = flyerDataService.getStoresList(function (items) {
        console.log("callback items invoked" + items);
        res.render('stores', {
            title: 'Yay, Here are your stores!',
            storesList: items
        });
    });
});

module.exports = router;
