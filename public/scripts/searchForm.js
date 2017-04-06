var form = document.querySelector("form");

if(form){
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var zipcode = document.getElementById("zipcode");
        console.log("searchForm.js.... zipcode= ", zipcode.value);
        location.assign("/stores/" + zipcode.value);
    });
}