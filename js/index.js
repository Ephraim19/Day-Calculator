var input = document.getElementById("submitButton");
input.addEventListener("click", submittedValues, true);

function submittedValues(event) {
  event.preventDefault();
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  if (day > 0 && day <= 31) {
    if (month > 0 && month <= 12) {
      let CC = year.slice(0, 2);
      let YY = year.slice(2, 4);
      let MM = month;
      let DD = day;
      let answer =
        (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
      console.log(answer);
    } else {
      alert("Ensure your month of birth is correct please");
    }
  }else {
    alert("Ensure your day of birth is correct please"); 
  }
}
