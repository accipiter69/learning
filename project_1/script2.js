// const restorantData = {
//   menu: [
//     {
//       name: "Salad Caesar",
//       price: "14$",
//     },
//     {
//       name: "Pizza Diavola",
//       price: "9$",
//     },
//     {
//       name: "Beefsteak",
//       price: "17$",
//     },
//     {
//       name: "Napoleon",
//       price: "7$",
//     },
//   ],
//   waitors: [
//     { name: "Alice", age: 22 },
//     { name: "John", age: 24 },
//   ],
//   averageLunchPrice: "20$",
//   openNow: true,
// };

// function isOpen(prop) {
//   let answer = "";
//   prop ? (answer = "Открыто") : (answer = "Закрыто");

//   return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//   if (
//     parseInt(fDish.price, 10) + parseInt(sDish.price, 10) <
//     parseInt(average, 10)
//   ) {
//     return "Цена ниже средней";
//   } else {
//     return "Цена выше средней";
//   }
// }

// console.log(
//   isAverageLunchPriceTrue(
//     restorantData.menu[0],
//     restorantData.menu[1],
//     restorantData.averageLunchPrice
//   )
// );

// function transferWaitors(data) {
//   const copy = JSON.parse(JSON.stringify(data));

//   copy.waitors[0] = { name: "Mike", age: 32 };
//   return copy;
// }

// transferWaitors(restorantData);

console.log(stringToNumber("-1"));
