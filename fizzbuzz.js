let number = document.querySelector("h3");
let plus = document.getElementById("btn-plus");
let minus = document.getElementById("btn-minus");

let counter = 0;

function cicle() {
  if (counter % 3 === 0 && counter % 5 === 0) {
    number.innerText = "FizzBuzz";
  } else if (counter % 3 === 0) {
    number.innerText = "Fizz";
  } else if (counter % 5 === 0) {
    number.innerText = "Buzz";
  } else {
    number.innerText = counter;
  }
}

function increase() {
  counter++;
  cicle();
}

function decrease() {
  counter--;
  cicle();
}

plus.addEventListener("click", increase);
minus.addEventListener("click", decrease);
