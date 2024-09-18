"use sctict";
console.log("penis");

//tabs
document.addEventListener("DOMContentLoaded", () => {
  //
  const tabs = document.querySelector(".tabheader__items");
  const tabsContent = document.querySelectorAll(".tabcontent");
  const tabHeads = document.querySelectorAll(".tabheader__item");

  tabs.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("tabheader__item")) {
      console.log("click");
      tabHeads.forEach((item, i) => {
        if (target == item) {
          hideTabs(tabsContent, tabHeads);
          showCurrentTab(tabsContent, tabHeads, i);
        }
      });
    }
  });
  //   tabHeads.forEach((item, index) => {
  //     item.addEventListener("click", () => {
  //       item.classList.add("tabheader__item_active");
  //       hideTabs(tabsContent, tabHeads);
  //       showCurrentTab(tabsContent, tabHeads, index);
  //     });
  //   });

  function hideTabs(tabs, heads) {
    heads.forEach((head) => {
      head.classList.remove("tabheader__item_active");
    });
    tabs.forEach((item) => {
      item.style.display = "none";
    });
  }
  function showCurrentTab(tabs, head, index = 0) {
    tabs[index].style.display = "block";
    head[index].classList.add("tabheader__item_active");
  }

  hideTabs(tabsContent, tabHeads);
  showCurrentTab(tabsContent, tabHeads);

  //timer
  // 1. установить таймер
  // 2. вичислить різницю
  // 3. оновлення таймера(секунди і т.д.)
  const deadline = "2024-09-19";

  // розрахунок часу в таймері
  function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date());
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let min = Math.floor((t / (1000 * 60)) % 60);
    let sec = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: min,
      seconds: sec,
    };
  }

  function setClock(selector, endTime) {
    let timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      mins = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      const t = getTimeRemaining(endTime);
      days.innerHTML = t.days;
      hours.innerHTML = t.hours;
      mins.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);
});
