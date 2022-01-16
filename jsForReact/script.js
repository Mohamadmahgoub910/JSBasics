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
// /////////////////////////////////////////////////////
// Primitive dt and Reference dt
// Primitive is { immutable undefined, String, Number, BigInt, Symbol, Boolean }
// Reference is { mutable  Array, Fn, Object, date}
// pass by value and pass by reference  { deep copy and shallow copy or bitwise value}
// reference ===> copy a deep copy and can edit in it along side with new values
// const name1 = ["a", "b", "c"];
// const name2 = Object.assign([], name1);
// name1.push("d");
// name2.push("e");
// console.log(name1);
// console.log(name2);
////////////////////////////////////////////////////////
// arrow function { solve this and syntax sugar}
// function sayHello(name) {
//   console.log("Hello " + name);
// }

// console.log(sayHello("Mohammad"));

// const sayHi = (Name) => (Name === "ali" ? `Hi ${Name}` : "sorry!");
// let x = sayHi("medo");
// console.log(x);
// const returnToTotal = (a, b) => a + b;
// let sum = returnToTotal(3, 4);
// console.log(sum);
// handle thatClass = this to point to current class
// function Person(){
//     this.age=0;
//     // solve this problem
//     // var thatClass = this;
//     // setInterval(function grow(){
//     //     var newAge= this.age++
//     //     console.log(newAge)
//     // },1000)
//     // handle use arrow
//     grow=()=>{
//         // handle your login it will done!
//     }
// }

// let P  = Person()
// ///////////////////////////////
// spread operator
// as a reference
// as a concat
// const arr1 = [2, 3, 4, 5, 6];
// const arr2 = [...arr1, "ali"];
// const arr3 = ["aliaa", ...arr1, ...arr2, "ali"];
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// const arNum = [2, 3, 9, 3];
// console.log(`max number with spread is  ${Math.max(...arNum)} `);
// //////////////////////////////
//  Rest Operators
// const sayHello = (fname, lname, ...params) => {
//   console.log(`${fname} + ${lname} + ${params}`);
// };
// sayHello("l", "k", "p", "a", "r", "m");
// ////////////////////////////////////////
// Destructure arr
// const names = ["ali", "soha", "aliaa"];
// const [a,,c] = names;
// console.log(a,c);
// ////////////////////////////
// Default value if  we wait 4 vlaues but we got 3
// const names = [1, 2, 3];
// const [a1, ...params] = names;
// console.log(a1, params);
// Swapping using Destruct
// let a = 9;
// let b = 8;
// [a, b] = [b, a];
// console.log(a, b);
// /////////////////////////////////
// Destruct in object
// const DBNames = { id: 1, age: 20, Name: "ali" };
// const { id: DBId, ...params } = DBNames;
// console.log(DBId, params);
// //////////////////////////////////////
// Destruct array of object
const arrObj = [
  { id: 1, age: 20, Name: "ali" },
  { id: 2, age: 30, Name: "aliaa" },
  { id: 3, age: 40, Name: "ola" },
];
// destruct array
const [it1, it2, it3] = arrObj;
console.log(it1);

// destruct object value inside array
const [
  { id, age, Name },
  { id: id1, age: age1, Name: name1 },
  { id: id3, age: age3, Name: name3 },
] = arrObj;

console.log(id1, age1, name1);
