"use strict";

// slice
// toLowerCase / toUpperCase
// includes
// startsWith / endsWith
// indexOf
// trim

//--------------------slice----------------------------------------

// const message = "Hello World";

// console.log(message.slice(3, 7)); // повертає рядок з 3 по 7 індекс не включаючи останній (7)
// console.log(message.slice(3)); // виріже 3 перших індекса і поверне то що залишилося
// console.log(message.slice(0)); // поверне весь рядок
// console.log(message.slice()); // поверне весь рядок

//---------------------toLowerCase---------------------------------------

// const message = "Hello World";

// console.log(message.toLowerCase()); // повертає рядок у нижньому регістрі
// console.log(message.toUpperCase()); // повертає рядок у верхньому регістрі

//---------------------------includes---------------------------------

// const message = "Hello World";

// console.log(message.includes("lo")); // шукає в рядку "lo" якщо є повертає true чутливий до регістру

//---------------------------startsWith/endWith---------------------------------

// const message = "Hello World";

// console.log(message.startsWith("He")); // Якщо починається на "He" повертає true чутливий до регістру
// console.log(message.endsWith("ld")); // Якщо закінчується на "ld" повертає true чутливий до регістру

//---------------------------indexOf---------------------------------

// const message = "Hello World";

// console.log(message.indexOf("W")); // шукає в сядку символ і повертає перший знайдений індекс елементу чутливий до регістру
// console.log(message.indexOf("s")); // якщо не знаходить елемент повертеє -1

//---------------------------trim---------------------------------

// const message = "      Hello World       ";

// console.log(typeof message.trim()); // приберає пробіли в рядку і повертає Hello World

//-----------------------------------------------------------------------------------------

/**
 * Форматування посилання
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

// let link = "https://my-site.ua/about";

// if (!link.endsWith("/")) {
//     link += "/";
// }

// console.log(link);

//-----------------------------------------------------------------------------------------

/**
 * Форматування посилання
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

// let link = "https://my-site.ua/about";

// if (!link.endsWith("/") && link.includes(my-site)) {
//     link += "/";
// }

// console.log(link);












