"use strict";

// const money = 200;

// if (money <= 201) {
//     console.log("no money");
// } else {
//     console.log("yes");
// };

// if (money >= 201) {
//     console.log("yes");
// } else if (money === 200) {
//     console.log("i have money");
// } else {
//     console.log("don't have money");
// }

//-----------------------------------------------------------------------

// const money = 450;

// const message = money >= 400 ? "i have money" : "no money";

// console.log(message);

//-----------------------------------------------------------------------

/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

// const hours = 14;
// const minutes = 26;
// let message;

// if (minutes > 0) {
//     message = `${hours} h. ${minutes} m.`;
// } else {
//     message = `${hours} h.`;
// }

// console.log(message);

//-----------------------------------------------------------------------

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. 
 * Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const deadLine = 2;

// if (deadLine === 0) {
//     console.log("Today");
// } else if (deadLine === 1) {
//     console.log("Tomorrow");
// } else if (deadLine === 2) {
//     console.log("Overmorrow");
// } else {
//     console.log("Date in the future");
// }

//-----------------------------------------------------------------------

// switch case - // тільки суворе порівнянн!!!!

// const user = "Alien";

// switch (user) {
//     case "Alien":
//         console.log("case 1");
//         break;
//     case "Poly":
//         console.log("case 2");
//         break;
//     case "Jylia":
//         console.log("case 3");
//         break;
//     default:
//         console.log("default case");
// }

//-----------------------------------------------------------------------

// Напиши скрипт выбора опції доставки товару.
//  * Опция зберігається у змінній option: 1 - самовывоз, 2 - курьер, 3 - пошта
//  *
//  * У змінну message записати повідомлення залежно від опції.
//  * - 'Ви зможете забрати товар завтра з 12:00 у нашому офісі'
//  * - 'Курьер доставить замовлення завтра з 9:00 до 18:00'
//  * - 'Посилка буде відправленна сьогодні'
//  * - 'Вам передзвонить менеджер'

// const option = 1;
// let message = "";

// switch (option) {
//     case 1:
//         message = `Ви зможете забрати товар завтра з 12:00 у нашому офісі`;
//         break;
//     case 2:
//         message = `Курьер доставить замовлення завтра з 9:00 до 18:00`;
//         break;
//     case 3:
//         message = `Посилка буде відправленна сьогодні`;
//         break;
//     default:
//         message = `Вам передзвонить менеджер`;
// }

// console.log(message);

//-----------------------------------------------------------------------

//  * Напиши скрипт перевірки підписки користувача при доступі до контента
//  * - Є три типа підписки: free, pro і vip.
//  * - Отримати доступ можуть тільки користувачі pro і vip

// const sub = "free";
// const subUser = sub === "pro" || sub === "vip";

// console.log(subUser);

//-----------------------------------------------------------------------

//  * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
//  * Для цього, користувач має бути:
//  * - другом
//  * - онлайн
//  * - без режима не турбувати

// const isOnline = true;
// const isFriend = true;
// const isDnd = true;

// const canChat = isFriend && isOnline && !isDnd;
// console.log("Можна відкрити чат?", canChat);





