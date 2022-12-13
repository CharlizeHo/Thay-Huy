// Variables
// const x = "1";
// const y = 2;
// const z= 3

// const result = y + z + x;
// console.log(result);

// console: 51

// // template string (ES6)
// const myName="Huy";
// const age = 25;

// // My name is Huy and 25 years old
// console.log("My name is " + myName + "and " + age + "years old");

// // Cách khác tối ưu hơn:
// // *backtick (` `)
// const greeting = `My name is ${myName} and ${age} years old`
// console.log(greeting);
// // My name is Huy and 25 years old

// Type of coversion and coersion
// const greeting = `My name is ${myName} and ${age} years old`

// const x = true;
// const y = 20;

// console.log(x + y);
// // console: 21

// const number = -0;

// if (number) {
//     console.log("OK");
// } else {
//     console.log("KO");
// }
// // console: KO

// Conditional tenary operator: toán tử 3 ngôi (chỉ với code đơn giản)

// condition ? result1 : result2 

// const gpa = 5;
// let result = gpa>= 8 ? "Execellent" : gpa>=6.5 ? "Good" : "Average"

// console.log(result);
// // console: Average

// function

// // 1> declared function
// function sayHi() {
//     console.log("Hi");
// }
// sayHi();

// // 2> expression function or annonymous function
// // Cả 2 được gọi là regular function
// const sayHi2 = function () {
//     console.log("Hi");
// }
// sayHi2();

// // 3> arrow function (ES6)
// // arrow function giúp rút gọn chữ function và return khi trả giá trị
// const sayHi3 = () => {
//     console.log("Hi");
// }
// sayHi3();

//     // Ví dụ khác
//     function sumNum(num1, num2){
//         return num1 + num2;
//     }

//     // arrow function:
//     const sumNum = (num1, num2) => num1 + num2; 

// Array
