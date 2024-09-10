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
