var jsdom = require('jsdom');

var service = {
    getFlyerData: function (storeid, callback) {
        return jsdom.env({
            url: "https://www.sprouts.com/web/guest/specials/-/flyer/store/" + storeid,
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
                console.log(JSON.stringify(items, '\t'));
                // res.send(items);
                callback(items);
            }
        });
    },
    getStoresList: function (zipcode, callback) {
        return jsdom.env({
            url: "https://www.sprouts.com/stores/search/-/store-search/view?_storesearch_WAR_storelocatorportlet_latitude=&_storesearch_WAR_storelocatorportlet_longitude=&zip=" + zipcode,

            // url: "https://www.sprouts.com/stores/search",
            scripts: ["http://code.jquery.com/jquery.js"],
            done: function (err, window) {
                var $ = window.$;
                var jQuery = $;
                var document = window.document;

                var items = [];

                $(".store-resultitem").each(function (index, value) {

                    var store = {};

                    store.id = value.attributes["data-storeid"].value;
                    store.url = "/specials/" + store.id;
                    store.latitude = value.attributes["data-latitude"].value;
                    store.longitude = value.attributes["data-longitude"].value;

                    var nameIndex = $(value).find(".store-finder-store-summary-name > h3 > a").text().lastIndexOf(")");
                    nameIndex = nameIndex - 12;

                    store.name = $(value).find(".store-finder-store-summary-name > h3 > a").text().slice(0, nameIndex);
                    console.log("store.name= " + store.name);

                    var phoneIndex = $(value).find(".store-finder-summary-address").text().lastIndexOf("-");
                    phoneIndex = phoneIndex - 7;

                    store.phone = $(value).find(".store-finder-summary-address").text().slice(phoneIndex);
                    store.address = $(value).find(".store-finder-summary-address").text().slice(0, phoneIndex);

                    // console.log("store.id = " + store.id + '\n', "store.latitude = " + store.latitude + '\n', "store.longitude = " + store.longitude + '\n', "store.name = " + store.name + '\n', "store.phone = " + store.phone + '\n', store.address);
                    items.push(store);

                });
                callback(items);
            }
        });
    }
};

module.exports = service;