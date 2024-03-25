"use strict";

//!========================================================================
//? Об’єкти

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

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined

console.log(book);






























