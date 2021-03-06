### Console

`npm init -y`

`npm install express-generator -g`

// creates an Express app
`express --view=hbs`

`npm install`

`npm start`

Working in IntelliJ? -> `⌘ + ,` -> Languages and Frameworks -> Node.js and NPM -> Enable

### Browser 

* `localhost:3000`

`npm install jsdom`

### Notes

* morgan: HTTP request logger middleware for node.js

immediately executed function expression (iefe) = `(function(){
  
})();`

### Resources

[HTML forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms)

[Express Routes and Controllers](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)

[10 CSS HTML Form Designs](https://www.sanwebe.com/2014/08/css-html-forms-designs)

### Credits

[unsplash veggie photo](https://unsplash.com/collections/347380/veggies?photo=8manzosDSGM)

[raspberries](https://unsplash.com/collections/146843/food-and-nutrition?photo=FjjUVn_KHLU) by [glencarrie](https://unsplash.com/@glencarrie)

[recipe photo](https://unsplash.com/collections/426527/food?photo=YT_DCMps5Wg) by [Anastasia Zhenina](https://unsplash.com/collections/426527/food?photo=YT_DCMps5Wg) 


### Goals

✓ get zipcode to get appropriate flyer for user

✓ get recipies

✓ be able to actually search for recipies, not just get pumpkin

* get nutrition info - max api call limit reached

* search by product name (es6 findwhere, maybe use regex). do this client side, use jquery to hide elements that don't match (select all the items, look at the title and if it doens't match regex, hide it)

* add to grocery list

* add to meal plan

### Stretch/extras

* save user info for meal plans liked/disliked

* icon hover no blue highlights

* group flyer data by department

* get sale valid dates (action -> action-acontent -> p)

* fix recipies alignment

### Current Status:
              
Able to get data from Sprouts weekly specials flyer

Single map instead of a lot of individual store cards - in progress

### Next Steps

* api key/.env

* move add to grocery list/meal plan button to bottom of div

* Add markers to stores map

* click button, add item to dom so it is visible

* use jquery to generate recipe

* then submit