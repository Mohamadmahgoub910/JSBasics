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
  progUnlimit.setAttribute("max", 100);
  // unlimited.toFixed(2)
  // make unlimited inner html value
  progress.innerHTML = ((unlimited * 100) / 100).toFixed(2) + "$";
  // "<h3>The value of unlimited brand is</h3>" + unlimited + "$" + "<br>";
  // append child
  progress.appendChild(progUnlimit);

  // make progress to store LifeTime
  let lifeTimeBar = d.createElement("progress");
  lifeTimeBar.setAttribute("value", lifeTime.toFixed(2));
  lifeTimeBar.setAttribute("max", 100);
  // make LifTime inner html value lifeTime.toFixed(2)
  progress2.innerHTML = ((lifeTime * 100) / 100).toFixed(2) + "$";
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
  // // display all progress bar here beside image based on click brex button
  // let botstrpContainer = d.getElementsByClassName("containerbts")[0];
  // // console.log(botstrpContainer);
  // botstrpContainer.style.display = "inline";
  // let imgbtsrp = d.getElementById("imgbtsrp");
  // imgbtsrp.setAttribute("src", "./images/brex.jpg");
  // imgbtsrp.style.width = "200px";
  // imgbtsrp.style.height = "100px";
  // // img display ==> done
  // let barbtstrp1 = d.querySelector(".barbtstrp1");
  // let barbtstrp2 = d.querySelector(".barbtstrp2");
  // let barbtstrp3 = d.querySelector(".barbtstrp3");

  // // console.log(barbtstrp1);

  // let brandname = d.getElementById("brandname");
  // let unlimitbtstr = d.getElementById("unlimitbtstr");
  // let lifeTimebtstr = d.getElementById("lifeTimebtstr");

  // brandname.innerHTML = "<p>Brex brand Card </p>";
  // unlimitbtstr.innerHTML = "<p> UnLimited Rewards </p>";
  // lifeTimebtstr.innerHTML = "<p> Life time Rewards </p>";
  // // progress title done !

  // // make progress to store unlimited
  // let unlimited = Sum * 1.1;
  // let lifeTime = Sum * 1.2;

  // let BrexBar = d.createElement("progress");
  // BrexBar.setAttribute("value", Brex.toFixed(2));
  // BrexBar.setAttribute("max", 100);

  // let progUnlimit = d.createElement("progress");
  // progUnlimit.setAttribute("value", unlimited.toFixed(2));
  // progUnlimit.setAttribute("max", 100);

  // let lifeTimeBar = d.createElement("progress");
  // lifeTimeBar.setAttribute("value", lifeTime.toFixed(2));
  // lifeTimeBar.setAttribute("max", 100);

  // barbtstrp1.appendChild(BrexBar);
  // barbtstrp2.appendChild(progUnlimit);
  // barbtstrp3.appendChild(lifeTimeBar);
  // // progress bar displayed ==> done

  // let brandPrice = d.getElementById("brandPrice");
  // let unlimitPrice = d.getElementById("unlimitPrice");
  // let lifeTimePrice = d.getElementById("lifeTimePrice");
  // brandPrice.innerHTML = Brex.toFixed(2) + "$";
  // unlimitPrice.innerHTML = unlimited.toFixed(2) + "$";
  // lifeTimePrice.innerHTML = lifeTime.toFixed(2) + "$";
  // There is problem in repeated progress bar
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

// ////////////////////////////////
// handle image slider
// const images = document.querySelectorAll(".image-container img");
// let i = 0; // current slide
// let j = 3; // total slides
// function next() {
//   document.getElementById("content" + (i + 1)).classList.remove("active");
//   i = (j + i + 1) % j;
//   document.getElementById("content" + (i + 1)).classList.add("active");
// }

// function prev() {
//   document.getElementById("content" + (i + 1)).classList.remove("active");
//   i = (j + i - 1) % j;
//   document.getElementById("content" + (i + 1)).classList.add("active");
// }
//////////////////////////////////////////
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
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
  let progUnlimit = d.createElement("progress");
  progUnlimit.setAttribute("value", unlimited.toFixed(2));
  progUnlimit.setAttribute("max", 100);
  d.getElementById("progress1").appendChild(progUnlimit);
  let unlimitPriceCard = (d.getElementById("unlimitPriceCard").innerHTML =
    "unlimit => " + unlimited + "$");
  let lifeTime = Sum * 1.2;
  let proglifeTime = d.createElement("progress");
  proglifeTime.setAttribute("value", lifeTime.toFixed(2));
  proglifeTime.setAttribute("max", 100);
  d.getElementById("progress2").appendChild(proglifeTime);
  let LifePriceCard = (d.getElementById("LifePriceCard").innerHTML =
    "unlimit => " + lifeTime + "$");
}
