"use strict";

// function foo() {
//     console.log("turbo");
// };

// foo(); //виклик функції

// function calcBMI(weight, height) {
//     let numWeight = weight.replace(",", "."); // replace-приймає 2 параметри ("," - що ми хочемо замінити, "." - на що хочемо замінити)
//     numWeight = Number.parseFloat(numWeight);
//     const numHeight = Number.parseFloat(height);
//     const bmi = numWeight / (numHeight ** 2);
//     console.log(bmi.toFixed(1)); // toFixed(1) - метод який залишає знаки після крапки
// };

// const bmi = calcBMI("88,3", "1.75");

//-------------------------------------------------------------------------------------

// function makeTransaction(quantity, pricePerDroid) {
//     const totalPrice = quantity * pricePerDroid;
//     console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
// };

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

//--------------------------------------------------------------------------------------

// function getShippingMessage(country, price, deliveryFee) {
//     const totalPrice = price + deliveryFee;
//     console.log(`Shipping to ${country} will cost ${totalPrice} credits`);
// };

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

//--------------------------------------------------------------------------------------

// function getElementWidth(content, padding, border) {
//     const boxSizsng = Number.parseFloat(content) + (Number.parseFloat(padding) + Number.parseFloat(border)) * 2;
//     console.log(boxSizsng);
// };

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

//======================================================================================
//======================================================================================
//! Функції частина 2

// function sum(a, b) {
//   console.log(arguments); // Arguments(2) [2, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
//   return a + b;
// }

// sum(2, 5);

//-------------------------------------------------------------------------------------
//* використання arguments у функції, яка повертає результат
//*  множення будь - якої кількості аргументів.

// function multiply() {
//   let total = 1;

//   for (const arg of arguments) {
//     total *= arg;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

//-------------------------------------------------------------------------------------
//* метод Array.from(), який створить масив із псевдомасиву.
//? можна використовувати методи масивів

// function foo() {
//   // У змінній args буде повноцінний масив з усіх аргументів
//     const args = Array.from(arguments);
//     console.log(args.join("-"));
//     return args.join("-");
// }

// foo(1, 2, 3); // Поверне "1-2-3"

//-------------------------------------------------------------------------------------
//* Параметри за замовчуванням
//? Функції можуть мати параметри зі значеннями за замовчуванням

// function greet(username = "Guest") { //! Параметр за замовчуванням username
//   console.log(`Hello, ${username}!`);
// }

// greet("Jacob"); // "Hello, Jacob!" //!!!Якщо передано аргумент, цей аргумент замінить значення за замовчуванням.
// greet();        // "Hello, Guest!"

//-------------------------------------------------------------------------------------
//* Функціональний вираз

// function multiply(x, y, z) { // Синтаксис оголошення функції (function declaration)
//   console.log(x * y * z);
// }

// const multiply = function (x, y, z) { // Синтаксис функціонального виразу (function expression)
//   console.log(x * y * z);
// };

// multiply(1, 2, 3);

//Різниця в тому, що функціональний вираз (function expression) не можна викликати до місця його створення, тільки після, тому що це буквально оголошення const змінної.

//-------------------------------------------------------------------------------------
//* Стек викликів

// Стек — структура даних, яка працює за принципом LIFO (Last-In-First-Out), тобто останнім прийшов — першим вийшов. Останнє, що додається на стек, буде видалено з нього першим, значить, можна додати або видалити елементи тільки з верхівки стека. Уяви стек як масив, у якого можна додати або видалити тільки елемент у кінці колекції.
// Стек викликів (call stack) — це структура даних, яка допомагає інтерпретатору відстежувати послідовність і стан викликів функцій у програмі. Він показує, яка функція зараз виконується і яка буде викликана наступною.
// Stack frame(кадр стека, запис стека) — структура, яка додається на стек при виклику функції.Зберігає службову інформацію, наприклад ім'я функції та номер рядка, у якому стався виклик.

//Стек викликів не безмежний, йому відводиться кінцевий обсяг пам'яті. Іноді в консолі можна побачити помилку "Uncaught RangeError: Maximum call stack size exceeded" — переповнення стека (stack overflow).











































