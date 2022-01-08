// Selectors
let d = document;

// Buttons

let Brex = d.getElementById("brex-button");
let strip = d.getElementById("strip-button");
let amex = d.getElementById("amex-button");
let unlimLife = d.getElementById("unlimLife-button");

let Sum = 0;
// let Sum = Vendor + Media + Crop + Team;
// console.log(Sum);

unlimLife.addEventListener("click", function (event) {
  let Vendor = d.getElementById("calc-input1").value;
  let Media = d.getElementById("calc-input2").value;
  let Crop = d.getElementById("calc-input3").value;
  let Team = d.getElementById("calc-input4").value;
  Sum =
    parseFloat(Vendor) +
    parseFloat(Media) +
    parseFloat(Crop) +
    parseFloat(Team);
  let unlimited = Sum * 1.1;
  let lifeTime = Sum * 1.2;
  let progress = d.getElementsByClassName("progress1")[0];
  let progress2 = d.getElementsByClassName("progress2")[0];
  let imageAndText = d.getElementsByClassName("imageAndText")[0];
  imageAndText.style.display = "inline-block";
  // make progress to store unlimited
  let progUnlimit = d.createElement("progress");
  progUnlimit.setAttribute("value", unlimited.toFixed(2));
  progUnlimit.setAttribute("max", unlimited.toFixed(2));

  // make unlimited inner html value
  progress.innerHTML = unlimited;
  // "<h3>The value of unlimited brand is</h3>" + unlimited + "$" + "<br>";
  // append child
  progress.appendChild(progUnlimit);

  // make progress to store LifeTime
  let lifeTimeBar = d.createElement("progress");
  lifeTimeBar.setAttribute("value", lifeTime.toFixed(2));
  lifeTimeBar.setAttribute("max", lifeTime.toFixed(2));
  // make LifTime inner html value
  progress2.innerHTML = lifeTime;
  // "<h3>The value of lifeTime brand is</h3>" + lifeTime + "$" + "<br>";
  progress2.appendChild(lifeTimeBar);

  // Make An Image beside progress bar
  let imageAlongBar = d.getElementById("imgAlongBar");
  imageAlongBar.src = "./images/pay.png";
  imageAlongBar.style.width = "80px";
  imageAlongBar.style.opacity = 0.5;
  imageAlongBar.style.display = "inline";
  let unlimit = d.getElementById("unlimit");
  let lifeTimeText = d.getElementById("lifeTimeText");
  let container = d
    .getElementsByClassName("container1")[0]
    .appendChild(imageAlongBar);
  event.preventDefault();
});

// ////////////////////////////////
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
  let brexImg = d.getElementById("image");
  let brexText = d.getElementById("brand");
  brexImg.innerHTML =
    '<image width="300px" height="100px" src="./images/brex.jpg"></image>';
  brexText.innerHTML =
    "<h3>The value of brex brand is</h3>" + Brex.toFixed(2) + "$";
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
  stripeText.innerHTML =
    "<h3>The value of stripe brand is</h3>" + strip.toFixed(2) + "$";
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
  amexText.innerHTML =
    "<h3>The value of amex brand is</h3>" + amex.toFixed(2) + "$";
  // console.log(amex);
  event.preventDefault();
});
// Functions
