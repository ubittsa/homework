function a() {
  alert("hello");
}
alert("before a");
a()
alert("after a");



let a = prompt("a?");
let b = prompt("b?", '3');

function cube(a, b) {
  let result = a;


  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
}
if (b < 1) {
  alert(`Степень ${b} не поддерживается`);
} else {
  alert(cube(a, b));
}

function avg2(a, b) {
  return (a + b) / 2;
}

alert(avg2(10, 5));


function sum3(a, b, c) {
  if (sum3 === a, b, c) {
    return (a + b + c);
  } else if (sum3 === a, b) {
    return (a + b)
  } else {
    return b
  }
}
alert(sum3(5, 10, 15));
alert(sum3(14, 12));

//---------------//

function intRandom(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  if (min === "") {
    min === 0
  }

  return Math.floor(rand);
}
alert(intRandom("", 10));
alert(intRandom(2, 15))

let b = -1;
let a = -1;

function intRandom(a, b) {
  if (a > b) {
    return -1
  } else if (a < b) {
    return -1
  } else {
    return -1
  }
}


function intRandom(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert(intRandom(0, 1))


function intRandom(r, d) {
  for (let i = 0; i < 11; i++) {
    alert(i)
  }


}
intRandom()

function sum() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

alert( sum() ); 
alert( sum(1) ); 
alert( sum(1, 2) ); 
alert( sum(1, 2, 3) ); 
alert( sum(1, 2, 3, 4) ); 
