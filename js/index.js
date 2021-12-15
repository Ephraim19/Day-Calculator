var input = document.getElementById("submitButton");
input.addEventListener("click", submittedValues, true);

function submittedValues(event) {
  event.preventDefault();
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;

  if (day > 0 && day <= 31) {
    if (month > 0 && month <= 12) {
      if (
        document.getElementById("female").checked ||
        document.getElementById("male").checked
      ) {
        var gender = document.querySelector(
          'input[name="gender"]:checked'
        ).value;

        //getting the day of the week
        var birthDay = new Date(year + '-' + month + '-' + day);
        var answer = birthDay.getDay();
       
        var maleNames = [
          "Kwasi",
          "Kwadwo",
          "Kwabena",
          "Kwaku",
          "Yaw",
          "Kofi",
          "Kwame",
        ];
        var femaleNames = [
          "Akosua",
          "Adwoa",
          "Abenaa",
          "Akua",
          "Yaa",
          "Afua",
          "Ama",
        ];
        var dayOfWeek = ['Sunday', 'Monday', 'Tuesday' ,'Wednesday','Thursday','Friday','Saturday']

        if (gender === "male") {
          if (answer === 0) {
            alert("You were born on " + dayOfWeek[0] + " and your Akan name is " + maleNames[0]);
          } else if (answer === 1) {
            alert("You were born on " + dayOfWeek[1] + " and your Akan name is " + maleNames[1]);
          } else if (answer === 2) {
            alert("You were born on " + dayOfWeek[2] + " and your Akan name is " + maleNames[2]);
          } else if (answer === 3) {
            alert("You were born on " + dayOfWeek[3] + " and your Akan name is " + maleNames[3]);
          } else if (answer === 4) {
            alert("You were born on " + dayOfWeek[4] + " and your Akan name is " + maleNames[4]);
          } else if (answer === 5) {
            alert("You were born on " + dayOfWeek[5] + " and your Akan name is " + maleNames[5]);
          } else if (answer === 6) {
            alert("You were born on " + dayOfWeek[6] + " and your Akan name is " + maleNames[6]);
          }
        } else {
          if (answer === 0) {
            alert("You were born on " + dayOfWeek[0] + " and your Akan name is " + femaleNames[0]);
          } else if (answer === 1) {
            alert("You were born on " + dayOfWeek[1] + " and your Akan name is " + femaleNames[1]);
          } else if (answer === 2) {
            alert("You were born on " + dayOfWeek[2] + " and your Akan name is " + femaleNames[2]);
          } else if (answer === 3) {
            alert("You were born on " + dayOfWeek[3] + " and your Akan name is " + femaleNames[3]);
          } else if (answer === 4) {
            alert("You were born on " + dayOfWeek[4] + " and your Akan name is " + femaleNames[4]);
          } else if (answer === 5) {
            alert("You were born on " + dayOfWeek[5] + " and your Akan name is " + femaleNames[5]);
          } else if (answer === 6) {
            alert("You were born on " + dayOfWeek[6] + " and your Akan name is " + femaleNames[6]);
          }
        }
      } else {
        alert("Ensure the gender is selected");
      }
    } else {
      alert("Ensure your month of birth is correct please");
    }
  } else {
    alert("Ensure your day of birth is correct please");
  }
}
