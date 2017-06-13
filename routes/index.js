var express = require('express');
var router = express.Router();

var flyerDataService = require('../flyerDataService');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Weekly Specials'});
});

router.get('/stores/:zipcode', function (req, res, next) {

    console.log("req.params.zipcode= " + req.params.zipcode);
    var zipcode = req.params.zipcode;

    var storesList = flyerDataService.getStoresList(zipcode, function (items, mapRectangle) {
        res.render('stores', {
            title: 'Weekly Specials',
            h2: 'Yay, Here are your stores!',
            storesList: items,
            mapRectangle: mapRectangle,
        });
    });
});

/* GET specials. */
router.get('/specials/:storeid', function (req, res, next) {

    var storeid = req.params.storeid;

    var flyerData = flyerDataService.getFlyerData(storeid, function (items) {
        // console.log("callback items invoked" + items);
        res.render('specials', {
            title: 'Weekly Specials',
            h2: 'Yay, Here are your sale items!',
            flyerData: items
        });
    });

});

/* GET recipies search page. */
router.get('/recipies', function (req, res, next) {

        res.render('recipies', {
            title: 'Weekly Specials',
            h2: 'Search for Recipies',
        });
});

module.exports = router;
