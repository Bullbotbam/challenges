// the current date and time
const today = moment().format("dddd, MMMM Do YYYY, h:mm A");
document.getElementById("currentDay").innerHTML = today;

// variables to create hour div and childElements
const body = document.body;
const divHour = document.querySelector("#hour1");
const divTime = document.querySelector(".time");
const inputNote = document.querySelector(".description");
// const saveBtn = document.querySelector(".saveBtn");
let scheduleHours = $("#container").append(
  divHour,
  divTime,
  inputNote,
  saveBtn
);
// var getEvents = JSON.parse(localStorage.getItem("Notes"));
// get current hour
var timeIsNow = function () {
  var currentHour = moment().hour();
  console.log(currentHour);
  // loop thorugh an array of objects (time: <value>, notes: <value>), save objects, skip if null
  $(".time-block").each(function () {
    var timeHour = parseInt($(this).attr("id").split("hour")[1]);
    // if note is post-active during current hour background-color: gray and disable input;
    console.log(timeHour);
    if (timeHour < currentHour) {
      // grey out
      this.classList.add("past");
      this.classList.remove("present");
      this.classList.remove("future");
    } // if note is active during current hour background-color: red and enable input;
    else if (timeHour == currentHour) {
      this.classList.add("present");
      this.classList.remove("past");
      this.classList.remove("future");
    }
    // if note is pre-active during current hour background-color: green and enable input;
    else {
      this.classList.add("future");
      this.classList.remove("past");
      this.classList.remove("present");
    }
  });
  // set results of array to localStorage
};
timeIsNow();

var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
  // console.log(this); //save button
  var time = $(this).siblings(".hour").text();
  var plan = $(this).siblings(".description").val();

  // THEN the text for that event is saved in local storage
  localStorage.setItem("Notes", plan);
  let events = localStorage.getItem("Notes");
});
