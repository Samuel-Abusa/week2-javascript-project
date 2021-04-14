//Defined two variables that we'll use in the function

let dateBorn;
var dob;

//This function runs on the event that the user clicks on the button with the event listener attribute

function collectDateBorn(){
  alert("Hello there! Let's get started right away. Click ok to continue.");
  
  let dateBorn = prompt("Kindly enter the date you were born in the following formart : mm/dd/yyyy");

  var dob = new Date(dateBorn);

  return dob;
}

//After the data is collected from the user in form of a date we convert it into the index of the day of the week 0 being Sunday.

var dayOfTheWeek = collectDateBorn().getDay();


var gender = prompt("What is your gender");