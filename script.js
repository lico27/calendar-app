// Display today's date at top of calendar
var dateToday = dayjs();
$("#currentDay").text(dateToday.format("dddd, D MMMM YYYY"));

// select textarea by id
// if current hour = id, add present class
// if current hour > id, add past class
// if current hour < id, add future class

// Get current time as one digit
let currentTime = dayjs();
currentTime = parseInt(currentTime.format("H"));
console.log("The hour is " + currentTime);

// Get all textarea IDs
let arrHours = [];

$("textarea").each(function() {
  arrHours.push($(this).attr("id"));
});

console.log(arrHours);

// Loop textarea IDs to change colour based on current time
for (let i = 0; i < arrHours.length; i++) {
    if (arrHours[i] < currentTime) {
        var now = $("#" + arrHours[i]).addClass("past");
    } else if (arrHours[i] == currentTime) {
        var now = $("#" + arrHours[i]).addClass("present");
    } else {
        var now = $("#" + arrHours[i]).addClass("future");
    }
}
    


// get id then add new class