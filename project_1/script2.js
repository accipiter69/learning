const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (obj) {
    const { languages } = obj.skills;
    let str = languages.join(" ").toUpperCase();
    return `Мне ${obj.age} и я владею языками: ${str}`;
  },
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  let str = arr.join(" ");
  if (str.length === 0) {
    return `Семья пуста;`;
  } else {
    return `Семья состоит из: ${str}`;
  }
}
console.log(showFamily(family));

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  arr.forEach(function (item) {
    console.log(item.toLowerCase());
  });
}
standardizeStrings(favoriteCities);

const someString = "This is some strange string";

function reverse(str) {
  if (typeof str !== "string") {
    return `Ошибка!`;
  }
  let arr = str.split("");
  let newArr = arr.reverse();
  return newArr.join("");
}
reverse(someString);

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  if (arr.length === 0) {
    console.log(`Нет доступных валют`);
    return `Нет доступных валют`;
  } else {
    let filteredArr = arr.filter(function (curr) {
      return curr !== missingCurr;
    });
    let finalStr = `Доступные валюты:\n${filteredArr.join("\n")}`;
    console.log(filteredArr);
    console.log(finalStr);
    return finalStr;
  }
}

availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY");
