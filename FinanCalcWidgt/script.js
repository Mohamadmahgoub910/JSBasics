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
  let image = d.getElementById("image");
  Sum =
    parseFloat(Vendor) +
    parseFloat(Media) +
    parseFloat(Crop) +
    parseFloat(Team);
  let Brex = Sum * 0.3;
  let brexImg = d.getElementById("image");
  let brexText = d.getElementById("brand");
  brexImg.innerHTML =
    '<image width="300px" height="100px" src="./images/brex.jpg"></image>';
  brexText.innerHTML = "<h3>The value of brex brand is</h3>" + Brex + "$";
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
  let stripImg = d.getElementById("image");
  let stripeText = d.getElementById("brand");
  stripImg.innerHTML =
    '<image width="300px" height="100px" src="./images/stripe.png"></image>';
  stripeText.innerHTML = "<h3>The value of stripe brand is</h3>" + strip + "$";
  // console.log(strip);
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
  let amexImg = d.getElementById("image");
  let amexText = d.getElementById("brand");
  amexImg.innerHTML =
    '<image width="300px" height="100px" src="./images/amex.png"></image>';
  amexText.innerHTML = "<h3>The value of amex brand is</h3>" + amex + "$";
  // console.log(amex);
  event.preventDefault();
});
// Functions
