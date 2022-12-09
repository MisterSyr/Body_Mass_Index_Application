// Event Listeners for button click
// Calculate event listener
document.querySelector(".calculate").addEventListener("click", function () {
  // hide output
  document.getElementById("output").style.display = "none";

  // show loader
  document.querySelector(".loader").style.display = "block";
  setTimeout(BMI, 5000);
});

// Clear event listener
document.querySelector(".clear").addEventListener("click", Clear);

// Functions [BMI calculation + Clear]

// Calculate function
function BMI() {
  // height and weight variables
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  // BMI formula
  let index = weight / (((height / 100) * height) / 100);
  let index0 = index.toFixed(0);

  // condition to check if height and weight are not equal to Zero.
  if (height && weight != 0) {
    const output = document.getElementById("output");
    const state = document.getElementById("state");
    // console.log("Your BMI is " + index);
    output.innerHTML = "Your BMI is " + index0;
    if (index0 < 15) {
      state.innerHTML =
        "<span style='color: #d39103';> 🥦 Very Severly Underweight!";
    } else if (index0 < 16) {
      state.innerHTML =
        "<span style='color: #d39103';> 🥦🥦 Severly Underweight! </span>";
    } else if (index0 < 18.5) {
      state.innerHTML =
        "<span style='color: #d39103';> 🥦🥦🥦 Underweight! </span>";
    } else if (index0 < 25) {
      state.innerHTML =
        "<span style='color: #016901';> 🥙 Normal (Healthy Weight) </span>";
    } else if (index0 < 30) {
      state.innerHTML = "<span style='color: #a03403';> 🍟 Overweight!</span>";
    } else if (index0 < 35) {
      state.innerHTML =
        "<span style='color: #aC0392B';> 🍩 Obese Class I (Moderate Obese)!</span>";
    } else if (index0 < 40) {
      state.innerHTML =
        "<span style='color: #aC0392B';> 🍩🍩 Obese Class II (Severly Obese)!</span>";
    } else if (index0 > 40) {
      state.innerHTML =
        "<span style='color: #aC0392B';> 🍩🍩🍩 Obese Class III (Very Obese)!</span>";
    }
    // Hide output and loader.
    document.getElementById("output").style.display = "block";
    document.querySelector(".loader").style.display = "none";
  } else {
    // Error massage
    // alert("Error!");
    Error();
    function Error() {
      document.getElementById("output").style.display = "block";
      document.querySelector(".loader").style.display = "none";
      document.getElementById("output").innerHTML =
        "<span style='color:#ac1c09';>⚠️ Error: Enter height and weight first!";
      // Settimeout method to hide the message after 5 seconds
      setTimeout(() => {
        document.getElementById("output").innerHTML = "";
        document.querySelector(".state").innerHTML = "";
      }, 5000);
    }
  }
}

// Clear function
function Clear() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("state").innerHTML = "";
}
