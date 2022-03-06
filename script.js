var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var FemaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
function getName(){
    let fullyear = parseInt(document.getElementById('year').value);
    let month = parseInt(document.getElementById('month').value);
    let day = parseInt(document.getElementById('day').value);
    let gender = document.getElementById('gender').value;
}



function getGender(){
    var genders = document.getElementsByName("gender");
    if(genders[0].checked == true){
      var gender = "male";
    }
    else if(genders[1].checked == true){
      var gender = "female";
    }
    else{
      return false;
    }
    switch(gender){
      case "male":
        if (dayValue == 1){
          alert("You were born on " +dayNames[0] + " and Your akan name is " +maleNames[0]);
        }
        else if(dayValue == 2){
          alert("You were born on "+dayNames[1] + " and Your akan name is " +maleNames[1]);
        }
        else if(dayValue == 3){
          alert("You were born on " +dayNames[2]+ " and Your akan name is " +maleNames[2]);
        }
        else if(dayValue == 4){
          alert("You were born on "+dayNames[3] +  " and Your akan name is " +maleNames[3]);
        }
        else if(dayValue == 5){
          alert("You were born on "+dayNames[4] +  " and Your akan name is " +maleNames[4]);
        }
        else if(dayValue == 6){
          alert("You were born on "+dayNames[5] +  " and Your akan name is " +maleNames[5]);
        }
        else if(dayValue == -0){
          alert("You were born on "+dayNames[6] + " and Your akan name is " +maleNames[6]);
        }
      break;
      case "female":
        if (dayValue == 1){
          alert("You were born on "+dayNames[0] + " and Your akan name is  " +femaleNames[0]);
        }
        else if(dayValue == 2){
          alert("You were born on " +dayNames[1] + " and Your akan name is " +femaleNames[1]);
        }
        else if(dayValue == 3){
          alert("You were born on " +dayNames[2] + " and Your akan name is " +femaleNames[2]);
        }
        else if(dayValue == 4){
          alert("You were born on " +dayNames[3] + " and Your akan name is " +femaleNames[3]);
        }
        else if(dayValue == 5){
          alert("You were born on " +dayNames[4] + " and Your akan name is " +femaleNames[4]);
        }
        else if(dayValue == 6){
          alert("You were born on " +dayNames[5] + " and Your akan name is " + femaleNames[5]);
        }else if(dayValue == -0){
          alert("You were born on " +dayNames[6] + " and Your akan name is " +femaleNames[6]);
        }
      break
      default:
            
    }
  }