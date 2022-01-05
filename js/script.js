// For with object
// var aObj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
// };
// var x;
// for (x in aObj) {
//   document.write(
//     `<p style='text-align:center' >index is ${x} and value is ${aObj[x]} </p>`
//   );
// }
// Nested For Loop
// document.write("<table>");
// for (let a = 2; a < 12; a++) {
//   document.write("<tr >");
//   for (let index = 1; index < 10; index++) {
//     document.write("<td>" + a * index + "</td>");
//   }
//   document.write("</tr>");
// }
// document.write("</table>");

// For each in the array
// var arr = ["a", "b", "c", "d", "e"];
// arr.forEach(function (value, index) {
//   document.write(
//     `<h3 style="text-align:center"; > the value of arr is ${value} and index is ${index} </h3>`
//   );
// });

// Switch statement
// var num = parseInt(prompt("enter a number", num));
// if (num) {
//   switch (num) {
//     case 1:
//       console.log("this is one ");
//       break;
//     case 2:
//       console.log("this is two ");
//       break;
//     case 3:
//       console.log("this is three ");
//       break;
//     default:
//       console.log("error");
//       break;
//   }
// } else {
//   alert(`this value not number`);
// }
// ////////////////

// Object
// var a = {
//   fname: "Mohammad",
//   lname: "Mahgoub",
//   email: "mohamad@gmail.com",
//   age: 27,
//   ageStatus: function () {
//     // console.log("We have a function here");
//     if (this.age > 30) {
//       return "person is > 30";
//     } else {
//       return "person is < 30";
//     }
//   },
// };
// console.log(`Full name is ${a.fname} ${a.lname}`);
// console.log(a.ageStatus());
///////////////////////////////
// Local Scope and Global Scope
// var a = 10;
// function fuc1() {
//   var b = 20;
//   console.log(a);
//   console.log(b);
// }
// fuc1();
// console.log(a);

// function hello() {
//   console.log("Hi");
// }
// hello();
/////////////////////////////////////
// var st = "Welcome To Js ";
// console.log("Before", st);
// var newSt = st.replace("Js", "Javascript");
// console.log("After", newSt);
// var weekends = ["one", "two", "three", "four", "five", "six", "seven"];
// console.log(typeof weekends);
// // console.log(weekends); // Print all weekdays
// console.log("For Loop To Print Out weekends days ");
// for (var i = 0; i < weekends.length; i++) {
//   console.log(weekends[i]);
// }
// console.log("Weekends to String ");
// console.log(weekends.toString()); // Make Strings display as a text.
// console.log("Push and Pop ");
// weekends.push("eight");
// console.log(weekends);
// weekends.pop();
// console.log(weekends);
// document.write(weekends.concat(st));
