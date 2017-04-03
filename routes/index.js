var express = require('express');
var router = express.Router();

var flyerDataService = require('../flyerDataService');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Meal Planner'});
});

/* GET specials. */
router.get('/specials/:storeid', function (req, res, next) {

    var storeid = req.params.storeid;

    var flyerData = flyerDataService.getFlyerData(storeid, function (items) {
        console.log("callback items invoked" + items);
        res.render('specials', {
            title: 'Meal Planner',
            h2: 'Yay, Here are your sale items!',
            flyerData: items
        });
    });

});

router.get('/stores/:zipcode', function (req, res, next) {
    console.log("req.params.zipcode= " + req.params.zipcode);
    var zipcode = req.params.zipcode;

    var storesList = flyerDataService.getStoresList(zipcode, function (items) {
        console.log("callback items invoked" + items);
        res.render('stores', {
            title: 'Meal Planner',
            h2: 'Yay, Here are your stores!',
            storesList: items
        });
    });
});

router.get('/stores', function (req, res, next) {


});

module.exports = router;
