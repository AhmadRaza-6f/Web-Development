const data = document.querySelector("#enteredData");
const resValue = document.querySelector("#result-value");

const numberButtons = [
  "btn7",
  "btn8",
  "btn9",
  "btn4",
  "btn5",
  "btn6",
  "btn1",
  "btn2",
  "btn3",
  "zero",
];
let firstNumber = "";
let operator = "";
let secondNumber = "";
let opClicked = false;
let expression = "";

numberButtons.forEach((btnID) => {
  document.querySelector(`#${btnID}`).addEventListener("click", (e) => {
    const clickData = e.target.textContent;
    if (opClicked) {
      secondNumber += clickData;
    } else {
      firstNumber += clickData;
    }
    expression += clickData;
    data.textContent = expression;
  });
});

// operator input

const Operators = ["divide", "multiply", "minus", "plus"];
Operators.forEach((btnID) => {
  document.querySelector(`#${btnID}`).addEventListener("click", (e) => {
    if (firstNumber === "") return;
    operator = e.target.textContent;
    opClicked = true;
    expression += operator;
    data.textContent = expression;
  });
});

// equal btn

document.querySelector(`#equal`).addEventListener("click", (e) => {
  //   if (firstNumber === "" || operator === "" || secondNumber === "") return;

  //   let ans = 0;
  //   let num1 = parseInt(firstNumber);
  //   let num2 = parseInt(secondNumber);

  //   if (operator === "/") {
  //     if (num2 === 0) resValue.textContent = "Error";
  //     else ans = num1 / num2;
  //   } else if (operator === "x") {
  //     ans = num1 * num2;
  //   } else if (operator === "-") {
  //     ans = num1 - num2;
  //   } else if (operator === "+") {
  //     ans = num1 + num2;
  //   }

  //   resValue.textContent = ans;
  //   firstNumber = ans.toString();
  //   secondNumber = "";
  //   opClicked = false;
  //   operator = "";

  if (expression === "") return;
  const exp = expression.replace(/x/g, "*");
  try {
    let ans = eval(exp);
    resValue.textContent = ans;
    firstNumber = ans.toString();
    secondNumber = "";
    opClicked = false;
    operator = "";
    expression = firstNumber;
    // data.textContent = expression;
} catch {
    resValue.textContent = "Error...";
}
});

// clear button

document.querySelector("#clear").addEventListener("click", (e) => {
  firstNumber = "";
  secondNumber = "";
  opClicked = false;
  operator = "";
  data.textContent = "0";
  resValue.textContent = "0";
  expression = "";
});
