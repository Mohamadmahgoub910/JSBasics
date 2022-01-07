// Selectors
let d = document;

// Buttons

let Brex = d.getElementById("brex-button");
let strip = d.getElementById("strip-button");
let amex = d.getElementById("amex-button");
let Sum = 0;
// let Sum = Vendor + Media + Crop + Team;
// console.log(Sum);
// Event Listeners
Brex.addEventListener("click", function (event) {
  let Vendor = d.getElementById("calc-input1").value;
  let Media = d.getElementById("calc-input2").value;
  let Crop = d.getElementById("calc-input3").value;
  let Team = d.getElementById("calc-input4").value;
  Sum =
    parseFloat(Vendor) +
    parseFloat(Media) +
    parseFloat(Crop) +
    parseFloat(Team);
  let Brex = Sum * 0.3;
  console.log(Brex);
  event.preventDefault();
});
// //////////////////////////
strip.addEventListener("click", function (event) {
  let Vendor = d.getElementById("calc-input1").value;
  let Media = d.getElementById("calc-input2").value;
  let Crop = d.getElementById("calc-input3").value;
  let Team = d.getElementById("calc-input4").value;
  Sum =
    parseFloat(Vendor) +
    parseFloat(Media) +
    parseFloat(Crop) +
    parseFloat(Team);
  let strip = Sum * 2.9;
  console.log(strip);
  event.preventDefault();
});
// /////////////////////////////
amex.addEventListener("click", function (event) {
  let Vendor = d.getElementById("calc-input1").value;
  let Media = d.getElementById("calc-input2").value;
  let Crop = d.getElementById("calc-input3").value;
  let Team = d.getElementById("calc-input4").value;
  Sum =
    parseFloat(Vendor) +
    parseFloat(Media) +
    parseFloat(Crop) +
    parseFloat(Team);
  let amex = Sum * 1.3;
  console.log(amex);
  event.preventDefault();
});
// Functions
