function calculateVolumeAndArea(rebro) {
  if (typeof rebro !== "number" || rebro < 0 || !Number.isInteger(rebro)) {
    return "При вычислении произошла ошибка";
  } else {
    let v = rebro * rebro * rebro;
    let s = rebro * rebro * 6;
    return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
  }
}
calculateVolumeAndArea(-15);

function getCoupeNumber(bilet) {
  if (bilet < 0 || typeof bilet !== "number" || !Number.isInteger(bilet)) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (bilet > 36 || bilet === 0) {
    return "Таких мест в вагоне не существует";
  } else {
    return Math.ceil(bilet / 4);
  }
}
getCoupeNumber(33);

function getTimeFromMinutes(min) {
  if (typeof min !== "number" || min < 0 || !Number.isInteger(min)) {
    return "Ошибка, проверьте данные";
  } else {
    // часов 0,5,6,7,8,9,10
    // час 1,
    // часа 2,3,4,
    let hours = Math.floor(min / 60);
    let minutes = min - hours * 60;
    if (hours < 1) {
      return `Это 0 часов и ${minutes} минут`;
    } else if (hours === 1) {
      return `Это 1 час и ${minutes} минут`;
    } else if (hours > 1 && hours <= 4) {
      return `Это ${hours} часа и ${minutes} минут`;
    } else {
      return `Это ${hours} часов и ${minutes} минут`;
    }
  }
}
getTimeFromMinutes(150.5);

function findMaxNumber(a, b, c, d) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    typeof d !== "number"
  ) {
    return 0;
  }
  let arr = [];
  let res = 0;
  arr.push(a, b, c, d);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > res) {
      res = arr[i];
    }
  }
  return res;
}
findMaxNumber(1, 2, 3, 4);

function fib(num) {
  if (typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
    return "";
  }

  let result = "";
  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i++) {
    if (i + 1 === num) {
      result += `${first}`;
      // Без пробела в конце
    } else {
      result += `${first} `;
    }

    let third = first + second;
    first = second;
    second = third;
  }

  return result;
}
