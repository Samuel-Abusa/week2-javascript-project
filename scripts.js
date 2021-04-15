/*$ (document).ready(function(){
  $ ('.card').hide();
});

*/



let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//This function runs on the event that the user clicks on the button with the event listener attribute

function collectDateBorn(){
  alert("Hello there! Let's get started right away. Click ok to continue.");
  
  let dateBorn = prompt("Kindly enter the date you were born in the following formart : mm/dd/yyyy");

  //This varriable holds the data which the user keyed in and converted it from a string to date
  let dtbrn = new Date(dateBorn);
  
  //After the data is collected from the user in form of a date we convert it into the index of the day of the week 0 being Sunday.
  var dayOfTheWeek = dtbrn.getDay();
  var monthOfTheYear = dtbrn.getMonth();
  
  if (dayOfTheWeek < 0 || dayOfTheWeek > 6 || monthOfTheYear < 0 || monthOfTheYear > 11){
    alert("Invalid date format.");
  }
  else{
    var gender = prompt("What is your gender");
 
   if (gender == "male"){
     console.log(maleNames[dayOfTheWeek]);
   }
   else if (gender = "female"){
     console.log(femaleNames[dayOfTheWeek]);
   }
   else{
     alert("Error generating birth name")
   }
  }
}






  
 
  

  




