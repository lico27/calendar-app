// Display today's date at top of calendar
var dateToday = dayjs();
$("#currentDay").text("Today is " + (dateToday.format("dddd, D MMMM YYYY")) + ". It is " + dateToday.format("h.mma") + ".");

// Get current time as one digit
let currentTime = dayjs();
currentTime = parseInt(currentTime.format("H"));

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
};

// Function to set interval for save confirmation to display
let savedMessageTime = function() {
    $("#saveConfirm").show("slow").delay(3000).hide("slow");
  }

// Loop to retrieve from/push to local storage and make save buttons functional
for (let i = 0; i < arrHours.length; i++) {
    let currentHour = arrHours[i];
    var currentSave = $("#btn" + currentHour);
    let currentText = $("#" + currentHour);
    let currentStored = JSON.parse(localStorage.getItem(currentHour + "hr"));
    currentText.text(currentStored);
    currentSave.on('click', function() {
        localStorage.setItem(currentHour + "hr", JSON.stringify(currentText.val()));
        savedMessageTime();
    });
};