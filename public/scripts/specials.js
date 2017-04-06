var displayHidden = function () {
    $('.hide').show();
};

$('.hide-field').hide();


$( ".showSearch" ).click(function() {
    $( ".search-field" ).toggle("slow");
});

$(document).ready(displayHidden);
