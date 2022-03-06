var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var birthDay;

function fillAll(){
    var year = document.forms["myForm"]["year"].value;
    var month = document.forms["myForm"]["month"].value;
    var date = document.forms["myForm"]["date"].value;
    var gender = document.forms["myForm"]["gender"].value;
    if (year == null || year == "", month == null || month == "", date == null || date == "", gender == null || gender == "")
      {alert("Kindly fill all fields");
      return false;
    }
}

function getDay(){
    let fullYear = document.getElementById('year').value;
    let CC = parseInt(fullYear.toString().substring(0,2));
    let YY = parseInt(fullYear.toString().substring(2,4));
    let MM = parseInt(document.getElementById("month").value);
    let DD = parseInt(document.getElementById("date").value);
    let d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    //console.log(d);
    return (Math.floor(d));
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
        if (birthDay == 0){
          alert("Born on " +dayNames[0] + ". Your akan name is " +maleNames[0]);
        }
        else if(birthDay == 1){
          alert("Born on "+dayNames[1] + ". Your akan name is " +maleNames[1]);
        }
        else if(birthDay == 2){
          alert("Born on " +dayNames[2]+ ". Your akan name is " +maleNames[2]);
        }
        else if(birthDay == 3){
          alert("Born on "+dayNames[3] +  ". Your akan name is " +maleNames[3]);
        }
        else if(birthDay == 4){
          alert("Born on "+dayNames[4] +  ". Your akan name is " +maleNames[4]);
        }
        else if(birthDay == 5){
          alert("Born on "+dayNames[5] +  ". Your akan name is " +maleNames[5]);
        }
        else if(birthDay == 6){
          alert("Born on "+dayNames[6] + ". Your akan name is " +maleNames[6]);
        }
      break;
      case "female":
        if (birthDay == 0){
          alert("Born on "+dayNames[0] + ". Your akan name is  " +femaleNames[0]);
        }
        else if(birthDay == 1){
          alert("Born on " +dayNames[1] + ". Your akan name is " +femaleNames[1]);
        }
        else if(birthDay == 2){
          alert("Born on " +dayNames[2] + ". Your akan name is " +femaleNames[2]);
        }
        else if(birthDay == 3){
          alert("Born on " +dayNames[3] + ". Your akan name is " +femaleNames[3]);
        }
        else if(birthDay == 4){
          alert("Born on " +dayNames[4] + ". Your akan name is " +femaleNames[4]);
        }
        else if(birthDay == 5){
          alert("Born on " +dayNames[5] + ". Your akan name is " + femaleNames[5]);
        }else if(birthDay == 6){
          alert("Born on " +dayNames[6] + ". Your akan name is " +femaleNames[6]);
        }
      break
      default:
        alert("Invalid details")
          
  }
}
function findName(){
  birthDay = getDay();
  getGender();
}