// Template literal / Strings
// console.log("Hi Baby !");
// var aliName = "ali";
// var age = 20;
// console.log(`my name is  ${aliName}
// and my age is ${age}
// so ${age > 30 ? "med" : "less than 30"}`);
// /////////////////////////////////////////////
//  2- var, let , const
// var support fn scope and doesn't support block scope
// ex ==>
// fn scope
// var aliName = "ali";
// function strName() {
//   aliName = "aliaa";
//   return aliName;
// }
// console.log(aliName);
// // still ali not aliaa
// // block scope  make ali  ==> aliaa
// var age = 12;
// var temp = 5;
// if (temp == 5) {
//   var age = 15;
// }
// console.log(age); // print 15 :(
// for (var i = 0; i < 5; i++) {
//   //   console.log(i); // print from 0 to 10
// }
// // But if we log out scope block
// console.log(i); // print 11 that's not eagle :(

// // Hoisting
// // redeclare + assign
// //////////////////////////////////////////////////////
// 3- let and const
//1-  let + const ==> reject declaration
//2- let accept assign
//3-  const reject assign
//4-  let, const reject hoisting
//5-  let , const support fn scope and block scope
//5- let, const reject global window
