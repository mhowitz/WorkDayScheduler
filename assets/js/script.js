//add time and date to screen using moment js
var date = moment().format("dddd, MMMM Do");
console.log(date);

var currentHour = moment().hours();
console.log(currentHour);



$("#currentDay").append(date);

$(".saveBtn").on("click", function() {
    var btnId = $(this).parent().attr("id");
    console.log(btnId);
    var textId = $(this).siblings(".form-control").val();
    localStorage.setItem(btnId, textId);
});

$(".time-block").each(function() {
    var btnId = $(this).attr("id");
    var loadId= localStorage.getItem(btnId);
    console.log(loadId);
    $(this).children($(".form-control")).val(loadId);
    if(btnId < currentHour) {
        $(this).children($(".form-control")).addClass("past")
    } else if (btnId > currentHour) {
        $(this).children($(".form-control")).addClass("future")
    } else {
        $(this).children($(".form-control")).addClass("present")
    }
})






