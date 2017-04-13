var hideForm = function () {
    $('.hide-form').hide();
};

$("#searchButton").click(function () {
    hideForm();
    searchRecipies().then(getRecipes);
});


var searchRecipies = function () {
    var output = $.ajax({
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=' + 'pumpkin', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        dataType: 'json',
        error: function (err) {
            alert(err);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "YOUR_API_KEY"); // Enter here your Mashape key
        }
    });
    return output;
};

var getRecipes = function (recipesList) {
    // console.log(recipesList);
    var recipiesArr = recipesList;

    var resultsContainer = $(".results-container");
    var recipeElement = $(".recipe-item");

    recipiesArr.forEach(function (recipe) {
        var newRecipeElement = recipeElement.clone();
        newRecipeElement.find(".mdl-card__title").find("img").attr("src", recipe.image);
        newRecipeElement.find(".mdl-card__supporting-text").append(recipe.title);
        newRecipeElement.find(".action-content.mdl-card__supporting-text").append(recipe.likes);

        resultsContainer.append(newRecipeElement);
        newRecipeElement.show();
    });
    resultsContainer.show();
};


