// h1 = document.getElementsByTagName("h1")[0];
// console.log(h1);
h11 = document.getElementById("first_h1");
// fire = document.getElementById("fire");
function fired() {
  h11.style.color = "white";
  h11.style.backgroundColor = "gray";
  console.log(h11);
  console.log("applied");
}
function over() {
  h11.style.color = "white";
  h11.style.backgroundColor = "green";
  console.log("mouse is over");
}
function out() {
  h11.style.color = "white";
  h11.style.backgroundColor = "gray";
  console.log("out applied");
}
div1 = document.getElementById("div1");
div1.onclick = () => {
  console.log("div is fired");
};
div1.title = "hello";
console.log(div1.title);
// Create another div
let div2 = document.createElement("div");
att1 = document.createAttribute("title");
att1.value = "This is div which we created!";
div2.setAttributeNode(att1);
div2.innerHTML = "The Data for newly Created element which is div 2 P";
div1.append(div2);
console.log("Done");
bye = document.getElementById("byeFired");
bye.addEventListener("click", function () {
  console.log("Bye!");
});

//////////////////\\\\\\\\\\\\\\\\\\\
// Read array of object data
// let students = [
//   {
//     id: 1,
//     name: "ali",
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "aya",
//     age: 24,
//   },
//   {
//     id: 3,
//     name: "aliaa",
//     age: 30,
//   },
// ];
//  All Students
// console.log(students);
// loop array first
// students.forEach((student) => {
//   console.log(student);
//   let x;
//   document.write("<table>");
//   document.write("<tr>");
//   for (x in student) {
//     console.log(`${x}, ${student[x]}`);

//     document.write("<td>" + `${x}, ${student[x]}` + "</td>");
//   }
//   document.write("<tr>");
//   document.write("</table>");
// });

// / //////////////////////
// convert array into object and object into an array
// let makeObj = {
//   gra: ["one", "two", "three"],
//   stuff: ["s1", "s2", "s3"],
//   Qty: [1, 2, 3],
// };
// // print all elements in the array from an object
// console.log(makeObj.stuff);
// makeObj.stuff.forEach(function (ele) {
//   console.log(ele);
// });
// // print all elements in the object { indexes + value[indexes]}
// let x;
// for (x in makeObj) {
//   console.table(`index ${x} and values are ${makeObj[x]}`);
// }
// ////////////////////////////////
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
