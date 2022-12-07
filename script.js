// Event Listeners for button click
// Calculate event listener
document.querySelector(".calculate").addEventListener("click", BMI);

// Clear event listener
document.querySelector(".clear").addEventListener("click", Clear);

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
    output.innerHTML = "Your BMI is " + index;
    if (index < 15) {
      state.innerHTML =
        "<span style='color: #d39103';> 🥦 Very Severly Underweight!";
    } else if (index < 16) {
      state.innerHTML =
        "<span style='color: #d39103';> 🥦🥦 Severly Underweight! </span>";
    } else if (index < 18.5) {
      state.innerHTML =
        "<span style='color: #d39103';> 🥦🥦🥦 Underweight! </span>";
    } else if (index < 25) {
      state.innerHTML =
        "<span style='color: #016901';> 🥙 Normal (Healthy Weight) </span>";
    } else if (index < 30) {
      state.innerHTML = "<span style='color: #a03403';> 🍟 Overweight!</span>";
    } else if (index < 35) {
      state.innerHTML =
        "<span style='color: #aC0392B';> 🍩 Obese Class I (Moderate Obese)!</span>";
    } else if (index < 40) {
      state.innerHTML =
        "<span style='color: #aC0392B';> 🍩🍩 Obese Class II (Severly Obese)!</span>";
    } else if (index > 40) {
      state.innerHTML =
        "<span style='color: #aC0392B';> 🍩🍩🍩 Obese Class III (Very Obese)!</span>";
    }
  } else {
    alert("Error!");
  }
}

// Clear function
function Clear() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("state").innerHTML = "";
}
