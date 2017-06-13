var hideForm = function () {
    $('.hide-form').hide();
};

$("#searchButton").click(function () {
    var ingredient = $("#spoonacular-ingredients").val();
    console.log(ingredient);
    hideForm();
    searchRecipies(ingredient).then(showRecipes);
});


var searchRecipies = function (ingredient) {
    var output = $.ajax({
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=' + ingredient, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        dataType: 'json',
        error: function (err) {
            alert(err);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "bwNDzcAbRImshqjSRgWGE7IpwFdDp1OU6QBjsn3iTv2Z5XQ3oL"); // Enter here your Mashape key
        }
    });
    return output;
};

var showRecipes = function (recipesList) {
    console.log(recipesList);
    var recipiesArr = recipesList;

    var resultsContainer = $(".results-container");
    var recipeElement = $(".recipe-item");

    recipiesArr.forEach(function (recipe) {

        var newRecipeElement = recipeElement.clone();

        newRecipeElement.find(".mdl-card__title").find("img").attr("src", recipe.image);
        newRecipeElement.find(".title").append(recipe.title);
        newRecipeElement.find(".likes").append(recipe.likes);
        newRecipeElement.find(".usedIngredientCount").append(recipe.usedIngredientCount);

        resultsContainer.append(newRecipeElement);
        newRecipeElement.show();
    });
    resultsContainer.show();
};