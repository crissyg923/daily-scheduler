

var currentDateText = $('#currentDay');
var date = dayjs().format('MMMM DD, YYYY');
currentDateText.text(date);

var saveButton = $('.saveBtn');
var scheduleEntryEl = $('.description');

// var currentHour = parseInt(dayjs().format('hour'));
var currentHour = dayjs().hour();
console.log(currentHour);

var hour9 = $('#hournine');
var hour10 = $('#hourten');
var hour11 = $('#houreleven');
var hour12 = $('#hourtwelve');
var hour1 = $('#hourone');
var hour1 = $('#hourtwo');
var hour3 = $('#hourthree');

var scheduleBlock = $('.currenthour');
console.log(scheduleBlock);


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

// var userIput = scheduleEntryEl.val();
// var saveLocal = function (){
//   var saveID = parseInt($(this).attr("id"));
//   var userIput = scheduleEntryEl.val();
// userInput.each(function (){
//   localStorage.setItem(saveID ,JSON.stringify(userIput))
//   // var saveID = parseInt($(this).attr("id").split("-")[1]);
// })
// }
saveButton.on('click', function () {
  var userInput = scheduleEntryEl.val();
  console.log(userInput);
  // console.log(this);
  // console.log(this.sibling);
 var key = $(this).parent().attr("id");
 var text = $(this).siblings(".description").val().trim();
 console.log(key);
 console.log (text);
localStorage.setItem(key, text);
  //   // var saveID = parseInt($(this).attr("id").split("-")[1]);
  // })
});




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });
