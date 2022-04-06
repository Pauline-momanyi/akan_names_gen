var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
document.querySelector(".formIn").addEventListener("submit", function(e){
  e.preventDefault()
var fullYear = document.querySelector('#year').value;
var month = document.querySelector("#month").value;
var date = document.querySelector("#date").value;
//var gender = document.querySelector("input[name='gender']:checked").value;
var genders = document.getElementsByName("gender");
console.log(genders);
var CC = parseInt(fullYear.toString().substring(0,2));
var YY = parseInt(fullYear.toString().substring(2,4));
var MM = parseInt(document.getElementById("month").value);
var DD = parseInt(document.getElementById("date").value);
var d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    
    if (fullYear == "" || month == "" || date == "" || genders == "")
      {alert("Kindly fill all fields");
      return false;
    }//return true
var allBday = [0,1,2,3,4,5,6]
var birthDay = (Math.floor(d));
console.log(birthDay);
// console.log(allBday.includes(birthDay));
var birthDay2 = allBday.indexOf(birthDay)
//console.log(birthDay2)

function getGender(){
    
    if(genders[0].checked){
      alert ('Born on a '+ dayNames[birthDay2] + '. Your akan name is ' + maleNames[birthDay2] )
    }else {
      alert ('Born on a '+ dayNames[birthDay2] + '. Your akan name is ' + femaleNames[birthDay2] ); 

    }
}getGender();
})