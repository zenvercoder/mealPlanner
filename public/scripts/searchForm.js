var form = document.querySelector("form");



form.addEventListener("submit", function(event) {
    var zipcode = document.getElementById("zipcode");
    console.log("zipcode= ", zipcode.value);
    location.assign("/stores/" + zipcode.value);

    event.preventDefault();
});

