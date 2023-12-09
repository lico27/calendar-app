// Display today's date at top of calendar
var dateToday = dayjs();
$("#currentDay").text("Today is " + (dateToday.format("dddd, D MMMM YYYY")) + ". It is " + dateToday.format("h.ma") + ".");

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

// Loop textarea IDs to change colour based on current time
for (let i = 0; i < arrHours.length; i++) {
    if (arrHours[i] < currentTime) {
        var selectColor = $("#" + arrHours[i]).addClass("past");
    } else if (arrHours[i] == currentTime) {
        var selectColor = $("#" + arrHours[i]).addClass("present");
    } else {
        var selectColor = $("#" + arrHours[i]).addClass("future");
    }
}
