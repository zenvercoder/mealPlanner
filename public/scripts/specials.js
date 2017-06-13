var displayHidden = function () {
    $('.hide').show();
};

$('.hide-field').hide();


$(".showSearch").click(function () {
    $(".search-field").toggle("slow");
});

// $(".grocery-list-add").click(function () {
//
//     var groceryItem = $(this).attr("data-grocery-item").split(",")[0];
//     var checkbox = $('<input type="checkbox">"');
//     $(".recipe-list ul .grocery-list-item").append("<li>").append(groceryItem);
    // console.log($(this).attr("data-grocery-item").split(",")[0]);
// });

$(".recipe-list ul .grocery-list-item").hover(function(){
    // $(this)["0"].remove($("innerText"));
    console.log($(this)["0"].innerText);

});


$(document).ready(displayHidden);
