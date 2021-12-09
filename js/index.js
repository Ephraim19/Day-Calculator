var input = document.getElementById("submitButton");
input.addEventListener("click", submittedValues, true);

function submittedValues(event) {
  event.preventDefault();
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  if (day <= 31 && month <= 12 && year <= 2021){
      confirm(month)
  }else {
      alert("Ensure your date of birth is correct please")
  }
}
