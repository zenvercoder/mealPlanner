var jsdom = require('jsdom');
var service = {
    getFlyerData: function(){
        jsdom.env({
            url: "https://www.sprouts.com/web/guest/specials/-/flyer/store/275",
            scripts: ["http://code.jquery.com/jquery.js"],
            done: function (err, window) {
                var $ = window.$;
                var jQuery = $;
                var document = window.document;

                // calling it statically.
                var arr = [].slice.call(window.document.scripts);


                // assigning it to jsonp, it's javascript. you have to evaluate it
                // the result of it being evaluated
                var jsonp = arr.find(function (script) {
                    return (script.firstChild &&
                    script.firstChild.nodeType == 3 &&
                    script.firstChild.textContent.match(/flyerData/));
                });
                eval(jsonp.textContent);
                if (!flyerData) {
                    return "no flyerData";
                }
                var departments = flyerData.departments.list;
                var link = 'http://';

                var items = departments.reduce(function (list, department) {
                    return list.concat(department.serializable.items.list);
                }, [])
                    .map(function (current, index, array) {
                        return {
                            name: current.serializable.name,
                            imageURL: link.concat(current.serializable.imageURL),
                            salePrice: current.serializable.price.serializable.salePrice,
                            saleQuantity: current.serializable.price.serializable.saleQuantity,
                            saleUom: current.serializable.price.serializable.saleUom
                        }
                    });
                console.log("Got flyerData, still need to get it delivered to the route");
                console.log(JSON.stringify(items, '\t'));
                // res.send(items);
                // return items;
            }
        });
    }
};




module.exports = service;
