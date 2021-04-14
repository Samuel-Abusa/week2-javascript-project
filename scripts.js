let dateBorn;
var dob;

function collectDateBorn(){
  alert("Hello there! Let's get started right away. Click ok to continue.");
  
  let dateBorn = prompt("Kindly enter the date you were born in the following formart : mm/dd/yyyy");

  var dob = new Date(dateBorn);

  return dob;
}

var dayOfTheWeek = collectDateBorn().getDay();
