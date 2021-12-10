var input = document.getElementById("submitButton");
input.addEventListener("click", submittedValues, true);

function submittedValues(event) {
  event.preventDefault();
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var gender = document.getElementsByName("gender");

  if (day > 0 && day <= 31) {
    if (month > 0 && month <= 12) {
      var CC = year.slice(0, 2);
      var YY = year.slice(2, 4);
      var MM = month;
      var DD = day;
      var answer =
        (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
    } else {
      alert("Ensure your month of birth is correct please");
    }
  } else {
    alert("Ensure your day of birth is correct please");
  }
}

function userName(answer, gender) {
  var maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if (gender === "male") {
    if (answer === 0) {
      alert("your Akan name is " + maleNames[0]);
    } else if (answer === 1) {
      alert("your Akan name is " + maleNames[1]);
    } else if (answer === 2) {
      alert("your Akan name is " + maleNames[2]);
    } else if (answer === 3) {
      alert("your Akan name is " + maleNames[3]);
    } else if (answer === 4) {
      alert("your Akan name is " + maleNames[4]);
    } else if (answer === 5) {
      alert("your Akan name is " + maleNames[5]);
    } else if (answer === 6) {
      alert("your Akan name is " + maleNames[6]);
    }
  } else {
    if (answer === 0) {
      alert("your Akan name is " + femaleNames[0]);
    } else if (answer === 1) {
      alert("your Akan name is " + femaleNames[1]);
    } else if (answer === 2) {
      alert("your Akan name is " + femaleNames[2]);
    } else if (answer === 3) {
      alert("your Akan name is " + femaleNames[3]);
    } else if (answer === 4) {
      alert("your Akan name is " + femaleNames[4]);
    } else if (answer === 5) {
      alert("your Akan name is " + femaleNames[5]);
    } else if (answer === 6) {
      alert("your Akan name is " + femaleNames[6]);
    }
  }
}
