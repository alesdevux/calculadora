const pantalla = document.getElementById('pantalla');

const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');

let num1 = 0;
let num2 = 0;
let operator = '';


for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', (event) => {
    if (pantalla.textContent === '0') {
      pantalla.textContent = event.target.textContent;
      num1 = event.target.textContent;
    } else {
      pantalla.textContent += event.target.textContent;

      if (operator === '') {
        num1 += event.target.textContent;
      } else {
        num2 += event.target.textContent;
      }
    }
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', (event) => {

    if (operators[i].id !== 'equal' && operator === '') {
      operator = event.target.id;
      pantalla.innerHTML += event.target.textContent;
    } else if (operators[i].id !== 'equal' && operator !== '') {
      operator = event.target.id;
      pantalla.innerHTML = num1 + event.target.textContent;
      num2 = 0;
    } else if (operators[i].id === 'equal' && num2 === 0) {
      num1 = 0;
      pantalla.innerHTML = num1;
    } else if (operators[i].id === 'equal') {
      num1 = parseInt(num1);
      num2 = parseInt(num2);

      if (operator === 'plus') {
        pantalla.innerHTML = num1 + num2;
      } else if (operator === 'minus') {
        pantalla.innerHTML = num1 - num2;
      } else if (operator === 'multiply') {
        pantalla.innerHTML = num1 * num2;
      } else if (operator === 'divide') {
        pantalla.innerHTML = num1 / num2;
      }

      num1 = parseInt(pantalla.innerHTML);
      num2 = 0;
      operator = '';
    }
  });
}
