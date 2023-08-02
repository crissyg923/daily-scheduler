// This function ensures nothing runs until HTML and CSS
// are loaded to the page.
$( document ).ready(function() {


// Code to add current date to top of page
var currentDateText = $('#currentDay');
var date = dayjs().format('dddd, MMMM DD, YYYY');
currentDateText.text(date);

// Elements pulled from the DOM
var saveButton = $('.saveBtn');
var scheduleEntryEl = $('.description');

// Sets current time but hour number (1-23)
var currentHour = dayjs().hour();
console.log(currentHour);

// Captures each schedule block
var scheduleBlock = $('.currenthour');
console.log(scheduleBlock);

// Color codes schedule blocks according to if it's a past block, current
// block, or future block
 scheduleBlock.each(function () {
    var blockID = parseInt($(this).attr("id").split("-")[1]);
    // console.log(blockID);
    if (blockID === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("past", "future");
    } else if (blockID < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present", "future");
    } else if (blockID > currentHour) {
      $(this).addClass("future");
      $(this).removeClass("past", "present");
    }
  })

// Saves the item in local storage using the element's ID
saveButton.on('click', function () {
  var userInput = scheduleEntryEl.val();
  console.log(userInput);
 var key = $(this).parent().attr("id");
 var text = $(this).siblings(".description").val().trim();
 console.log(key);
 console.log (text);
localStorage.setItem(key, text);
  
});

// Retrieves saved content from local storage
$('#hour-9 .description').text(localStorage.getItem('hour-9'));
$('#hour-10 .description').text(localStorage.getItem('hour-10'));
$('#hour-11 .description').text(localStorage.getItem('hour-11'));
$('#hour-12 .description').text(localStorage.getItem('hour-12'));
$('#hour-13 .description').text(localStorage.getItem('hour-13'));
$('#hour-14 .description').text(localStorage.getItem('hour-14'));
$('#hour-15 .description').text(localStorage.getItem('hour-15'));
$('#hour-16 .description').text(localStorage.getItem('hour-16'));
$('#hour-17 .description').text(localStorage.getItem('hour-17'));

});



