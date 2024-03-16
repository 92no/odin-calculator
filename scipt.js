"use strict";

// DOM Elements
const display = document.querySelector(".display");

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", () => appendInput("7"));
const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", () => appendInput("8"));
const btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", () => appendInput("9"));
const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", () => appendInput("4"));
const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", () => appendInput("5"));
const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", () => appendInput("6"));
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => appendInput("1"));
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => appendInput("2"));
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => appendInput("3"));
const btn0 = document.querySelector("#btn0");
btn0.addEventListener("click", () => appendInput("0"));
const btnPeriod = document.querySelector("#btnPeriod");
btnPeriod.addEventListener("click", () => appendInput("."));

const btnDivide = document.querySelector("#btnDivide");
btnDivide.addEventListener("click", () => appendOperand("÷"));

const btnMultiply = document.querySelector("#btnMultiply");
btnMultiply.addEventListener("click", () => appendOperand("×"));

const btnMinus = document.querySelector("#btnMinus");
btnMinus.addEventListener("click", () => appendOperand("-"));

const btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", () => appendOperand("+"));

const btnEquals = document.querySelector("#btnEquals");
btnEquals.addEventListener("click", () => operate(displayText));

let displayText = "";
let operand = "";

function appendInput(input) {
  displayText = displayText.concat(input);
  display.textContent = displayText;
}

function appendOperand(op) {
  operand = op;
  displayText = displayText.concat(op);
  display.textContent = displayText;
}

function operate(displayText) {
  if (operand === "+") {
    let indexOfOperand = displayText.indexOf("+");
    let num1 = displayText.substring(0, indexOfOperand);
    let num2 = displayText.substring(indexOfOperand);

    displayText = parseInt(num1) + parseInt(num2);
    display.textContent = displayText;
  } else if (operand === "-") {
    let indexOfOperand = displayText.indexOf("-");
    let num1 = displayText.substring(0, indexOfOperand);
    let num2 = displayText.substring(indexOfOperand);

    displayText = parseInt(num1) - parseInt(num2);
    display.textContent = displayText;
  } else if (operand === "/") {
    let indexOfOperand = displayText.indexOf("÷");
    let num1 = displayText.substring(0, indexOfOperand);
    let num2 = displayText.substring(indexOfOperand);

    displayText = parseInt(num1) / parseInt(num2);
    display.textContent = displayText;
  } else if (operand === "*") {
    let indexOfOperand = displayText.indexOf("×");
    let num1 = displayText.substring(0, indexOfOperand);
    let num2 = displayText.substring(indexOfOperand);

    displayText = parseInt(num1) * parseInt(num2);
    display.textContent = displayText;
  }
}

addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    displayText = "";
    display.textContent = displayText;
  }
});
