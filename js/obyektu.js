"use strict";

//!========================================================================
//? Об’єкти ===============================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };


//*-------------------------------------------------------------------------
//* Вкладені властивості

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {           // складається з окремо країна і місто
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {             // складається з кількості підписників, переглядів і лайків
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

//*-------------------------------------------------------------------------
//* Доступ до властивостей через крапку

// Перший спосіб отримати доступ до властивості об'єкта — це синтаксис objectName.key.

// На місце звернення буде повернуте значення властивості з таким ключем.
// Якщо в об'єкті відсутня властивість з таким ключем, на місце звернення повернеться undefined.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// console.log(book);

//*-------------------------------------------------------------------------
//* Доступ до властивостей через квадратні дужки

// Другий спосіб отримати доступ до властивості об'єкта — це синтаксис objectName[”key”]

//! На місце звернення буде повернуто значення властивості з таким ім'ям.
//! Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.

// const book = {
//   title: "Lion king",
//   autor: "Stiven King",
//   price: 200,
//   rating: 4,
// }

// const propKey = "autor";

// console.log(book.propKey);
// console.log(book[propKey]);

//*-------------------------------------------------------------------------
//* Зміна значення властивостей
//* Додавання властивостей

//  const book = {
//   title: "Lion king",
//   autor: "Stiven King",
//   price: 200,
//   rating: 4,
// }

// book.autor = "Alina Yarosh"; //Зміна значення властивостей
// book.price = 300; // Зміна значення властивостей

// book.pges = 700; // Додавання властивостей (якщо в обєкті такого значення немає додає)

// console.log(book);

//*-------------------------------------------------------------------------
//* Короткі властивості

// const name = "Alina";
// const age = 32;

// //! під час оголошення об'єкта достатньо вказати тільки ім'я властивості,
// //! а значення буде взято зі змінної з аналогічним ім'ям.
// const user = {
//   name,
//   age,
// };

// console.log(user.age);
// console.log(user.name);

//*-------------------------------------------------------------------------
//* Обчислювальні властивості

// Значенням обчислювальної властивості може бути будь-який валідний вираз.

// const propName = "name";
// const user = {
//   age: 25,
//   // ключ цієї властивості буде взято зі значення змінної propName
//   [propName]: "Alina Yarosh",
// }

// console.log(user.name);

//!========================================================================
//? Перебір об'єкта ===============================================
//* Цикл for...in ----------------------------------------

// На відміну від масиву або рядка, об'єкт — це не ітерабельна сутність, тобто його не можна перебрати циклами for або for...of.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key);          // Ключ
//   console.log(book[key]);    // Значення властивості з таким ключем
// };

//*-------------------------------------------------------------------------
//* Метод Object.keys()

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// //! Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати властивості об'єкта,
// //! не вдаючись до використання циклу for...in.

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// };
  
//!========================================================================
//? Масив об’єктів ===============================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   }
// ];

// // Для перебору такого масиву використовується стандартний цикл for...of.

// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }

//*-------------------------------------------------------------------------
//* Пошук об'єкта за значенням властивості

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
// 	if(book.author === authorToSearchFor) {
// 		console.log(book);
// 		console.log(book.title)
// 		console.log(book.rating)
// 	}
// }

//*-------------------------------------------------------------------------
//* Колекція значень властивості

// 1. Створити новий порожній масив для зберігання значень властивостей
// 2. Перебрати масив об'єктів у циклі
// 3. На кожній ітерації додати в новий масив значення необхідної властивості

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", , rating: 6.8 }
// ];

// const titles = [];

// for (const book of books) {
// 	titles.push(book.title)
// }

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

// Дізнаємося середній рейтинг усієї нашої колекції. Для цього треба скласти всі рейтинги й розділити отримане значення на кількість книг.

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", , rating: 6.8 }
// ];

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = totalRating / books.length;
// console.log(averageRating); // 8

//!========================================================================
//? Методи об'єкта ===============================================

// Якщо значення властивості — це функція, така властивість називається методом об'єкта.























