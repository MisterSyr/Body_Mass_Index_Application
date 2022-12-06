// Event Listeners for button click
// Calculate event listener
document.querySelector(".calculate").addEventListener("click", BMI);

// Functions [BMI calculation + Clear]

// Calculate function
function BMI() {
  // height and weight variables
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  // BMI formula
  let index = (weight / (((height / 100) * height) / 100)).toFixed(0);

  // condition to check if height and weight are not equal to Zero.
  if (height && weight != 0) {
    const output = document.getElementById("output");
    const state = document.getElementById("state");
    console.log("Your BMI is " + index);
  } else {
    alert("Error!");
  }
}

// Clear function
function clear() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("output").value = "";
  document.getElementById("state").value = "";
}
