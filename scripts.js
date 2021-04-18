var aknNames = function(yr, gendr){
  let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var dt = new Date(yr);
  
  if (gendr = "Male"){
    return maleNames[dt.getDay()];
  }
  else{
    return femaleNames[dt.getDay()];
  }
}



$ (document).ready(function(){
  $ ('form').submit(function(){
    var yr = parseInt($ ('#do_b').val());
    var gendr = $ ('#gndr').val();
    
    alert('Your Akan name is '+aknNames(yr, gendr));
  });
});
