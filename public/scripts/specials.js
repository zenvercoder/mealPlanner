var displayHidden = function () {
    $('.hide').show();
};

$('.hide-field').hide();


$(".showSearch").click(function () {
    $(".search-field").toggle("slow");
});

$(".grocery-list-add").click(function () {

    var groceryItem = $(this).attr("data-grocery-item").split(",")[0];
    var checkbox = $('<input type="checkbox">"');
    $(".recipe-list ul .grocery-list-item").append("<li>").append(groceryItem);
    // console.log($(this).attr("data-grocery-item").split(",")[0]);
});

$(document).ready(displayHidden);
